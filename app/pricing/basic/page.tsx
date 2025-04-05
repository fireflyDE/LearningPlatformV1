import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";


export default function BasicPlanPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-4 md:px-16">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT - Plan Info */}
        <div className="text-black">
          <h1 className="text-3xl font-semibold mb-2">Thank you for Choosing</h1>
          <h2 className="text-3xl font-bold mb-4">The Basic Plan</h2>
          <div className="mb-4">
              <Image
                src="https://y6kszdvuln.ufs.sh/f/r58qqbjUXDOkiTdYFmHIwY89PzVMBKXNh0HS3aO2Te6goq15"
                alt="Basic Plan Icon"
                width={32}
                height={32}
              />
            </div>
          <p className="text-gray-600 mb-4">Ideal for individual learners and freelancers</p>
          <div className="text-3xl font-bold mb-2">₹899 <span className="text-base font-normal text-gray-500">monthly</span></div>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
              annually <Switch defaultChecked />
            </div>
          
          <ul className="space-y-2 text-sm mt-6">
            <li>✔ Included Features</li>
            <li>✔ 5 GB Cloud Storage</li>
            <li>✔ Basic Customer Support</li>
            <li>✔ Access to Community Forums</li>
            <li>✔ Unlimited Free Courses (Limited to basic or introductory courses)</li>
            <li>✔ Course Completion Certificates (Only for free courses)</li>
            <li>✔ Mobile & Tablet Access</li>
            <li>✔ Limited Quiz & Assessment Attempts</li>
          </ul>
        </div>

        {/* RIGHT - Payment Form (same layout) */}
        <Card className="w-[415px] h-[752px] shadow-lg border p-6 flex flex-col justify-between mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">Payment Method</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="border rounded-lg p-2 flex items-center justify-center bg-gray-100">pew pew</div>
              <div className="border rounded-lg p-2 flex items-center justify-center bg-gray-100">pew pew</div>
              <div className="border rounded-lg p-2 flex items-center justify-center bg-gray-100">pew pew</div>
            </div>

            <div className="space-y-4">
              <Input placeholder="Full Name" />
              <Input placeholder="Address" />
              <Input placeholder="Card Number" />

              <div className="grid grid-cols-3 gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString().padStart(2, '0')}>
                        {(i + 1).toString().padStart(2, '0')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => {
                      const year = new Date().getFullYear() + i;
                      return (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>

                <Input placeholder="CVC" />
              </div>

              <Button className="w-full mt-6">Continue</Button>
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center mt-6">
            By continuing to payment, I agree to the{" "}
            <a href="#" className="underline text-blue-500">Terms of Use</a>,{" "}
            <a href="#" className="underline text-blue-500">Refund Policy</a>, and{" "}
            <a href="#" className="underline text-blue-500">Privacy Policy</a>.
          </p>
        </Card>
      </div>
    </div>
  );
}
