import { renderHook, act } from "@testing-library/react";
import { useAuth } from "@/hooks/useAuth";
import { describe, expect, it, vi } from "vitest";
import { AuthProvider as AuthProviderComponent } from "@/context/AuthContext";




vi.mock("firebase/auth", () => ({
  signInWithEmailAndPassword: vi.fn(() =>
    Promise.resolve({ user: { uid: "1", email: "test@test.com" } })
  ),
  signOut: vi.fn(() => Promise.resolve()),
  onAuthStateChanged: vi.fn((auth, cb) => {
    cb(null);
    console.log(auth)
    return () => {};
  }),
}));

vi.mock("firebase/firestore", () => ({
  doc: vi.fn(),
  getDoc: vi.fn(() =>
    Promise.resolve({
      exists: () => true,
      data: () => ({ name: "Test", role: "admin" }),
    })
  ),
}));

describe("Auth Flow", () => {
  it("should login user", async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AuthProviderComponent>{children}</AuthProviderComponent>
    );

    const { result } = renderHook(() => useAuth(), { wrapper });

    await act(async () => {
      await result.current.login("test@test.com", "123456");
    });

    expect(result.current.login).toBeDefined();
  });

  it("should logout user", async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AuthProviderComponent>{children}</AuthProviderComponent>
    );

    const { result } = renderHook(() => useAuth(), { wrapper });

    await act(async () => {
      await result.current.logout();
    });

    expect(result.current.logout).toBeDefined();
  });
});