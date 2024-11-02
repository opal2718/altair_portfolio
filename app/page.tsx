// app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home"); // / 경로에서 /home으로 리디렉션
  return null; // 리디렉션을 설정했으므로 null 반환
}
