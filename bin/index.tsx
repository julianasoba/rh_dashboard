import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, Clock, CalendarDays, Users, Plus, Trash2, Save,
  MapPin, Phone, Mail, FileText
} from "lucide-react";
import { toast } from "sonner";

interface Turno {
  id: string;
  nome: string;
  entrada: string;
  saida: string;
  intervalo: string;
}

const CompanyProfile = () => {
  const [turnos, setTurnos] = useState<Turno[]>([
    { id: "1", nome: "Manhã", entrada: "06:00", saida: "14:00", intervalo: "60" },
    { id: "2", nome: "Tarde", entrada: "14:00", saida: "22:00", intervalo: "60" },
    { id: "3", nome: "Noite", entrada: "22:00", saida: "06:00", intervalo: "60" },
  ]);

  const [folgasMensais, setFolgasMensais] = useState("4");
  const [diasFerias, setDiasFerias] = useState("30");
  const [toleranciaMinutos, setToleranciaMinutos] = useState("10");
  const [horasSemanais, setHorasSemanais] = useState("44");
  const [bancoHoras, setBancoHoras] = useState(true);
  const [pontoDigital, setPontoDigital] = useState(true);
  const [notificacoes, setNotificacoes] = useState(true);
  const [adicionalNoturno, setAdicionalNoturno] = useState(true);

  const addTurno = () => {
    const newId = String(Date.now());
    setTurnos([...turnos, { id: newId, nome: "", entrada: "08:00", saida: "17:00", intervalo: "60" }]);
  };

  const removeTurno = (id: string) => {
    setTurnos(turnos.filter((t) => t.id !== id));
  };

  const updateTurno = (id: string, field: keyof Turno, value: string) => {
    setTurnos(turnos.map((t) => (t.id === id ? { ...t, [field]: value } : t)));
  };

  const handleSave = () => {
    toast.success("Configurações salvas com sucesso!");
  };

  const fadeUp = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 },
  };

  return (
    <>
      <Tabs defaultValue="geral" className="space-y-6">
        <TabsList className="bg-secondary">
          <TabsTrigger value="geral" className="gap-2">
            <Building2 className="h-4 w-4" />
            Geral
          </TabsTrigger>
          <TabsTrigger value="turnos" className="gap-2">
            <Clock className="h-4 w-4" />
            Turnos
          </TabsTrigger>
          <TabsTrigger value="jornada" className="gap-2">
            <CalendarDays className="h-4 w-4" />
            Jornada & Folgas
          </TabsTrigger>
          <TabsTrigger value="regras" className="gap-2">
            <FileText className="h-4 w-4" />
            Regras
          </TabsTrigger>
        </TabsList>

        {/* TAB GERAL */}
        <TabsContent value="geral">
          <motion.div {...fadeUp} className="grid gap-6 md:grid-cols-2">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  Informações da Empresa
                </CardTitle>
                <CardDescription>Dados cadastrais e informações de contato</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nome">Razão Social</Label>
                  <Input id="nome" placeholder="Nome da empresa" defaultValue="Empresa Exemplo LTDA" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fantasia">Nome Fantasia</Label>
                  <Input id="fantasia" placeholder="Nome fantasia" defaultValue="Empresa Exemplo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cnpj">CNPJ</Label>
                  <Input id="cnpj" placeholder="00.000.000/0000-00" defaultValue="12.345.678/0001-90" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inscricao">Inscrição Estadual</Label>
                  <Input id="inscricao" placeholder="Inscrição estadual" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> E-mail</span>
                  </Label>
                  <Input id="email" type="email" placeholder="contato@empresa.com" defaultValue="contato@empresa.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">
                    <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> Telefone</span>
                  </Label>
                  <Input id="telefone" placeholder="(00) 00000-0000" defaultValue="(11) 99999-0000" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="endereco">
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Endereço</span>
                  </Label>
                  <Input id="endereco" placeholder="Endereço completo" defaultValue="Rua Exemplo, 123 - Centro - São Paulo/SP" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Resumo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total de Funcionários</span>
                  <Badge variant="secondary" className="font-display font-bold text-lg px-3">47</Badge>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Departamentos</span>
                  <Badge variant="secondary" className="font-display font-bold text-lg px-3">6</Badge>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Turnos Ativos</span>
                  <Badge variant="secondary" className="font-display font-bold text-lg px-3">{turnos.length}</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Setor de Atividade</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Ramo de atividade</Label>
                  <Select defaultValue="comercio">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="comercio">Comércio</SelectItem>
                      <SelectItem value="industria">Indústria</SelectItem>
                      <SelectItem value="servicos">Serviços</SelectItem>
                      <SelectItem value="tecnologia">Tecnologia</SelectItem>
                      <SelectItem value="saude">Saúde</SelectItem>
                      <SelectItem value="educacao">Educação</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Porte da empresa</Label>
                  <Select defaultValue="medio">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mei">MEI</SelectItem>
                      <SelectItem value="micro">Microempresa</SelectItem>
                      <SelectItem value="pequeno">Pequena empresa</SelectItem>
                      <SelectItem value="medio">Média empresa</SelectItem>
                      <SelectItem value="grande">Grande empresa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* TAB TURNOS */}
        <TabsContent value="turnos">
          <motion.div {...fadeUp}>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Turnos de Trabalho
                    </CardTitle>
                    <CardDescription>Configure os turnos da sua empresa</CardDescription>
                  </div>
                  <Button onClick={addTurno} size="sm" className="gap-2">
                    <Plus className="h-4 w-4" /> Novo Turno
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {turnos.map((turno, index) => (
                  <motion.div
                    key={turno.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-end gap-4 rounded-lg border border-border bg-secondary/30 p-4"
                  >
                    <div className="flex-1 space-y-2">
                      <Label className="text-xs">Nome do Turno</Label>
                      <Input
                        value={turno.nome}
                        onChange={(e) => updateTurno(turno.id, "nome", e.target.value)}
                        placeholder="Ex: Manhã"
                      />
                    </div>
                    <div className="w-28 space-y-2">
                      <Label className="text-xs">Entrada</Label>
                      <Input
                        type="time"
                        value={turno.entrada}
                        onChange={(e) => updateTurno(turno.id, "entrada", e.target.value)}
                      />
                    </div>
                    <div className="w-28 space-y-2">
                      <Label className="text-xs">Saída</Label>
                      <Input
                        type="time"
                        value={turno.saida}
                        onChange={(e) => updateTurno(turno.id, "saida", e.target.value)}
                      />
                    </div>
                    <div className="w-28 space-y-2">
                      <Label className="text-xs">Intervalo (min)</Label>
                      <Input
                        type="number"
                        value={turno.intervalo}
                        onChange={(e) => updateTurno(turno.id, "intervalo", e.target.value)}
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:bg-destructive/10"
                      onClick={() => removeTurno(turno.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </motion.div>
                ))}
                {turnos.length === 0 && (
                  <div className="py-8 text-center text-muted-foreground">
                    <Clock className="mx-auto mb-2 h-8 w-8 opacity-40" />
                    <p>Nenhum turno configurado</p>
                    <p className="text-sm">Clique em "Novo Turno" para adicionar</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* TAB JORNADA & FOLGAS */}
        <TabsContent value="jornada">
          <motion.div {...fadeUp} className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  Jornada de Trabalho
                </CardTitle>
                <CardDescription>Defina a carga horária e regras de jornada</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-2">
                  <Label>Horas semanais</Label>
                  <Select value={horasSemanais} onValueChange={setHorasSemanais}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="20">20 horas</SelectItem>
                      <SelectItem value="30">30 horas</SelectItem>
                      <SelectItem value="36">36 horas</SelectItem>
                      <SelectItem value="40">40 horas</SelectItem>
                      <SelectItem value="44">44 horas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Tolerância de atraso (minutos)</Label>
                  <Input
                    type="number"
                    value={toleranciaMinutos}
                    onChange={(e) => setToleranciaMinutos(e.target.value)}
                    min="0"
                    max="30"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Regime de trabalho</Label>
                  <Select defaultValue="clt">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clt">CLT</SelectItem>
                      <SelectItem value="pj">PJ</SelectItem>
                      <SelectItem value="estagio">Estágio</SelectItem>
                      <SelectItem value="temporario">Temporário</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-accent" />
                  Folgas & Férias
                </CardTitle>
                <CardDescription>Configure os dias de folga e férias</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-2">
                  <Label>Folgas mensais por funcionário</Label>
                  <Input
                    type="number"
                    value={folgasMensais}
                    onChange={(e) => setFolgasMensais(e.target.value)}
                    min="0"
                    max="15"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Dias de férias anuais</Label>
                  <Input
                    type="number"
                    value={diasFerias}
                    onChange={(e) => setDiasFerias(e.target.value)}
                    min="0"
                    max="45"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Dias de folga semanal</Label>
                  <Select defaultValue="dom">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dom">Domingo</SelectItem>
                      <SelectItem value="sab-dom">Sábado e Domingo</SelectItem>
                      <SelectItem value="escala">Escala (6x1)</SelectItem>
                      <SelectItem value="escala-5x2">Escala (5x2)</SelectItem>
                      <SelectItem value="12x36">12x36</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* TAB REGRAS */}
        <TabsContent value="regras">
          <motion.div {...fadeUp}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Regras e Funcionalidades
                </CardTitle>
                <CardDescription>Ative ou desative funcionalidades do sistema</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { label: "Banco de Horas", desc: "Permitir acúmulo de horas extras para compensação", state: bancoHoras, setter: setBancoHoras },
                  { label: "Ponto Digital", desc: "Registro de ponto via aplicativo ou sistema web", state: pontoDigital, setter: setPontoDigital },
                  { label: "Notificações", desc: "Enviar alertas de atrasos e faltas para gestores", state: notificacoes, setter: setNotificacoes },
                  { label: "Adicional Noturno", desc: "Calcular automaticamente adicional noturno (22h às 5h)", state: adicionalNoturno, setter: setAdicionalNoturno },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-lg border border-border p-4">
                    <div>
                      <p className="font-medium text-sm">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                    <Switch checked={item.state} onCheckedChange={item.setter} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>

      <div className="mt-6 flex justify-end">
        <Button onClick={handleSave} size="lg" className="gap-2 font-display font-semibold">
          <Save className="h-4 w-4" />
          Salvar Configurações
        </Button>
      </div>
      </>
  );
};

export default CompanyProfile;