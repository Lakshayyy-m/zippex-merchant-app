import { redirect } from "next/navigation";
import { auth } from "@/lib/firebase";

const Page = () => {
  const user = auth.currentUser;

  if (!user) {
    redirect("/sign-in");
  } else {
    redirect("/dashboard/home");
  }
};

export default Page;
