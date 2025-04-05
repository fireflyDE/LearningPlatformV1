import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function PricingSection() {
  return (
    <section className="w-full h-[655px] bg-[#222831] py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Pricing Plans</h2>
        <p className="text-gray-300">
          Explore our competitive pricing options designed to fit your learning needs.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
        {/* Basic Plan */}
        <div className="w-[390px] h-[466px] bg-[#393E46] rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div className="mb-4">
              <Image
                src="https://y6kszdvuln.ufs.sh/f/r58qqbjUXDOkiTdYFmHIwY89PzVMBKXNh0HS3aO2Te6goq15"
                alt="Basic Plan Icon"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-2xl font-semibold mb-1">Basic Plan</h3>
            <p className="text-gray-300 mb-4">Ideal for individual learners and freelancers</p>
            <div className="text-2xl font-bold">₹899 <span className="text-base font-normal text-gray-300 ml-1">monthly</span></div>
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-300">
              annually <Switch defaultChecked />
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white">
              <li>✓ Included Features</li>
              <li>✓ 5 GB Cloud Storage</li>
              <li>✓ Basic Customer Support</li>
              <li>✓ Access to Community Forums</li>
            </ul>
          </div>
          <Link  href="/pricing/basic">
            <Button className="w-full mt-6 bg-transparent border border-white text-white hover:bg-white hover:text-black">
                Sign Up Now
            </Button>
          </Link>
        </div>

        {/* Pro Plan */}
        <div className="w-[390px] h-[466px] bg-[#EEEEEE] rounded-xl p-6 flex flex-col justify-between text-black relative">
          <div className="absolute top-4 right-4 bg-black text-white text-xs px-2 py-1 rounded-full">Best Value</div>
          <div>
            <div className="mb-4">
              <Image
                src="https://y6kszdvuln.ufs.sh/f/r58qqbjUXDOkufIoVWF3VxjhHvXs9tS4Ky5Qeco68rdbPmR7"
                alt="Pro Plan Icon"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-2xl font-semibold mb-1">Pro Plan</h3>
            <p className="text-gray-600 mb-4">Perfect for small teams and businesses</p>
            <div className="text-2xl font-bold">₹1,399 <span className="text-base font-normal text-gray-600 ml-1">monthly</span></div>
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
              annually <Switch defaultChecked />
            </div>
            <ul className="mt-6 space-y-2 text-sm">
              <li>✓ Unlimited Course Access</li>
              <li>✓ Unlimited Cloud Storage</li>
              <li>✓ 24/7 Premium Support</li>
              <li>✓ Custom Integrations Available</li>
            </ul>
          </div>
          <Link  href="/pricing/pro">
            <Button className="w-full mt-6 bg-[#6C63FF] text-white hover:bg-[#554dd8]">
                Join the Pro Plan
            </Button>
          </Link>
        </div>

        {/* Enterprise Plan */}
        <div className="w-[390px] h-[466px] bg-[#393E46] rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div className="mb-4">
              <Image
                src="https://y6kszdvuln.ufs.sh/f/r58qqbjUXDOkXPodRaOCNa9Eo3sR6mcuHpVTz1lb8UKtxAjL"
                alt="Enterprise Plan Icon"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-2xl font-semibold mb-1">Enterprise Plan</h3>
            <p className="text-gray-300 mb-4">Tailored for large organizations</p>
            <div className="text-2xl font-bold">₹1,599 <span className="text-base font-normal text-gray-300 ml-1">monthly</span></div>
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-300">
              annually <Switch defaultChecked />
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white">
              <li>✓ Comprehensive Features</li>
              <li>✓ 5 GB Cloud Storage</li>
              <li>✓ Priority Support</li>
              <li>✓ Exclusive Community Access</li>
            </ul>
          </div>
          <Link  href="/pricing/enterprise">
            <Button className="w-full mt-6 bg-transparent border border-white text-white hover:bg-white hover:text-black">
                Join Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
