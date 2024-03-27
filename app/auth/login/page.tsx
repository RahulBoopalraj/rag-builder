"use client"

import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { signIn, useSession } from "next-auth/react"

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
});

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      signIn('email', { email: values.email })
        .then((response) => {
          if (response?.error) {
            toast.error(response.error, {
              closeButton: true,
            })
          }
        })
    },
  });

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <form onSubmit={formik.handleSubmit}>
            <div className="grid gap-2 text-center mb-8">
              <h1 className="text-3xl font-bold">Welcome</h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  required
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </div>
              <Button
                type="submit" className="w-full"
              >Login</Button>
            </div>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-background px-2 text-muted-foreground">
                or continue with
              </span>
            </div>
          </div>
          <Button
            type="submit" className="w-full"
            variant="outline"
            onClick={() => signIn("google")}
          > Login with Google </Button>
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