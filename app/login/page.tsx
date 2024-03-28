"use client"

import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function Login() {
    const { toast } = useToast()
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center mb-3">
            <h1 className="text-3xl font-bold"> Welcome </h1>
            <p className="text-sm text-muted-foreground"> Enter your email below to login to your account </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <Button>Login</Button>
            <Button>Login with Google</Button>
          </div>
          <div className="mt-4 text-center text-sm">
            By signing in you agree with our{" "}
            <Link href="#" className="underline">
              terms and conditions
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
