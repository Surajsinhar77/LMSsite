/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/ve7ewKhDKTS
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Arimo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function Cart() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-4 lg:px-8 h-14 border-b">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Acme Inc</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link href="/auth" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="/auth/ACourses" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Courses
          </Link>
          <Link href="/auth/About" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="/auth/cart" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Cart
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-8 px-4 md:px-8 md:flex md:gap-8">
        <div className="max-w-5xl mx-auto md:flex-1">
          <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
          <div className="grid gap-6">
            <div className="grid grid-cols-[100px_1fr_100px] items-center gap-4">
              <img
                src="/placeholder.svg"
                width={100}
                height={60}
                alt="Course Thumbnail"
                className="rounded-md"
                style={{ aspectRatio: "100/60", objectFit: "cover" }}
              />
              <div>
                <h3 className="text-lg font-medium">Introduction to Web Development</h3>
                <p className="text-muted-foreground text-sm">Learn the basics of HTML, CSS, and JavaScript.</p>
              </div>
              <div className="text-right font-medium">$49.99</div>
            </div>
            <div className="grid grid-cols-[100px_1fr_100px] items-center gap-4">
              <img
                src="/placeholder.svg"
                width={100}
                height={60}
                alt="Course Thumbnail"
                className="rounded-md"
                style={{ aspectRatio: "100/60", objectFit: "cover" }}
              />
              <div>
                <h3 className="text-lg font-medium">Advanced React Patterns</h3>
                <p className="text-muted-foreground text-sm">Dive deep into React's powerful features.</p>
              </div>
              <div className="text-right font-medium">$99.99</div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto md:w-[300px]">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <Card>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>$149.98</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tax</span>
                <span>$11.99</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between font-bold">
                <span>Total</span>
                <span>$161.97</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Proceed to Checkout</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-8 flex items-center justify-between">
        <p className="text-sm">&copy; 2023 Acme Courses. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}