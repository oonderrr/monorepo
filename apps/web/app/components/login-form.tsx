'use client';

import { cn } from '@workspace/ui/lib/utils';
import { Button } from '@workspace/ui/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card';
import { Input } from '@workspace/ui/components/input';
import { Label } from '@workspace/ui/components/label';
import { toast } from 'sonner';
import { useActionState, useEffect } from 'react';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const [formDataState, formAction, isPending] = useActionState(
    async (_prevState: unknown, formData: FormData) => {
      return {
        email: String(formData.get('email') ?? ''),
        password: String(formData.get('password') ?? ''),
      } as { email: string; password: string };
    },
    null as { email: string; password: string } | null,
  );

  useEffect(() => {
    if (!formDataState) return;
    const rawFormData = formDataState;
    toast('Login successful', {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">
            {JSON.stringify(rawFormData, null, 2)}
          </code>
        </pre>
      ),
    });
  }, [formDataState]);

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" name="password" required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full" disabled={isPending}>
                  Login
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{' '}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
