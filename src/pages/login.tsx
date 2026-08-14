import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/loader";
import { Label } from "@/components/ui/label";
import { InputGroup } from "@/components/ui/input-group";
import { EyeClosed, EyeIcon } from "lucide-react";

export default function Login() {
  const { login, user, isLoading } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Preenche todos os campos.");
      return;
    }

    if (password.length < 6) {
      setError("A password deve ter pelo menos 6 caracteres.");
      return;
    }

    setIsSubmitting(true);

    try {
      await login(email, password);
      navigate("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        const code = (error as { code?: string }).code;

        const messages: Record<string, string> = {
          "auth/invalid-credential": "Email ou password incorrectos.",
          "auth/too-many-requests":
            "Conta temporariamente bloqueada. Tenta mais tarde.",
          "auth/network-request-failed":
            "Erro de ligação. Verifica a tua internet.",
          "auth/user-disabled": "Esta conta foi desactivada.",
        };

        setError(messages[code ?? ""] ?? "Ocorreu um erro inesperado.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <Loader />; // ou um spinner
  if (user) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-sm space-y-6 p-8 rounded-xl border border-border bg-card shadow-sm">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold">Entrar</h1>
          <p className="text-sm text-muted-foreground">
            Acesso restrito a colaboradores
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="nome@empresa.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <InputGroup>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
              <Button
                type="button"
                variant="ghost"
                className="rounded-l-none"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <span className="transition-all duration-600 ease-in-out">
                  {showPassword ? (
                    <EyeIcon className="h-4 w-4" />
                  ) : (
                    <EyeClosed className="h-4 w-4" />
                  )}
                </span>
              </Button>
            </InputGroup>
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <div
                className={`border-${3} border-t-${3} border-t-[#2563eb] border-[#f3f3f3] w-${6} h-${6} rounded-full loader`}
              ></div>
            ) : (
              "Entrar"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
