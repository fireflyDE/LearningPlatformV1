// components/HeroSectionTwo.tsx

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

export default function HeroSectionTwo() {
  return (
    <section className="w-full bg-white py-16 px-6 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side image */}
        <div className="flex-1">
          <Image
            src="https://y6kszdvuln.ufs.sh/f/r58qqbjUXDOk7YM2mXi3pVwtkTQ41nWc6oylxR2KuGUjHC0A"
            alt="Learning Illustration"
            width={710}
            height={491}
            className="w-full h-auto"
          />
        </div>

        {/* Right side login box */}
        <div className="w-[493px] h-[582px] bg-white rounded-[32px] shadow-lg p-8 flex flex-col items-center justify-start space-y-6">
          {/* "Join Us!" Header with offset border */}
          <div className="relative">
            <h2 className="text-xl font-bold px-4 py-1 border-2 border-[#003087] bg-white relative z-10">
              Join Us!
            </h2>
            <div className="absolute top-1 left-1 w-full h-full border-2 border-black z-0"></div>
          </div>

          {/* Form Fields */}
          <div className="w-full space-y-13">
            <Input
              type="text"
              placeholder="Email/Username"
              className="h-11 border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400"
            />
            <Input
              type="password"
              placeholder="Password"
              className="h-11 border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400"
            />
            <div className="flex justify-center">
              <Button className="h-11 bg-[#003087] hover:bg-[#002070] text-white shadow-md px-38">
                Login
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center w-full">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-3 text-sm text-gray-500">Or continue with</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex w-full justify-between gap-4">
            <button className="flex-1 py-2 border rounded-xl flex justify-center items-center shadow hover:shadow-md">
              <FcGoogle size={24} />
            </button>
            <button className="flex-1 py-2 border rounded-xl flex justify-center items-center shadow hover:shadow-md">
              <FaFacebook size={20} className="text-[#0866ff]" />
            </button>
            <button className="flex-1 py-2 border rounded-xl flex justify-center items-center shadow hover:shadow-md">
              <FaApple size={20} />
            </button>
          </div>

          {/* Sign-up Link */}
          <p className="text-sm text-gray-600 text-center">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
