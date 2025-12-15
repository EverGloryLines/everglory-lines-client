"use client";

import { motion, Variants } from "framer-motion";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  Button,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui";

const purposeOptions = [
  "General",
  "Maritime & Logistics",
  "Marine & Technical Services",
  "Gas & Petrochem",
  "Offshore Marine",
  "Capital",
] as const;

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  purpose: z.array(z.string()).min(1, "Please select at least one purpose"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      purpose: [],
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", data);

    toast.success("Form submitted successfully!");

    form.reset();
    setIsSubmitting(false);
  };

  const togglePurpose = (purpose: string) => {
    const currentPurposes = form.getValues("purpose");
    const newPurposes = currentPurposes.includes(purpose)
      ? currentPurposes.filter((p) => p !== purpose)
      : [...currentPurposes, purpose];
    form.setValue("purpose", newPurposes, { shouldValidate: true });
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-none shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-6 md:p-12"
    >
      <motion.h2
        variants={itemVariants}
        className="text-[28px] md:text-3xl font-light leading-none tracking-tight text-[#24479B] mb-6 md:mb-8"
      >
        Get in touch with us.
      </motion.h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="firstName"
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<FormData, "firstName">;
                }) => (
                  <FormItem>
                    <FormLabel className="text-[#24479B] font-medium text-base">
                      First Name
                    </FormLabel>
                    <input
                      {...field}
                      placeholder="Enter Your First Name"
                      className="w-full bg-transparent border-0 border-b border-gray-300 px-0 py-1 text-gray-900 placeholder:text-gray-400 focus:border-b-2 focus:border-[#10b981] focus:ring-0 focus:outline-none transition-all duration-300 text-sm md:text-base"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="lastName"
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<FormData, "lastName">;
                }) => (
                  <FormItem>
                    <FormLabel className="text-[#24479B] font-medium text-base">
                      Last Name
                    </FormLabel>
                    <input
                      {...field}
                      placeholder="Enter Your Last Name"
                      className="w-full bg-transparent border-0 border-b border-gray-300 px-0 py-1 text-gray-900 placeholder:text-gray-400 focus:border-b-2 focus:border-[#10b981] focus:ring-0 focus:outline-none transition-all duration-300 text-sm md:text-base"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <FormField
              control={form.control}
              name="email"
              render={({
                field,
              }: {
                field: ControllerRenderProps<FormData, "email">;
              }) => (
                <FormItem>
                  <FormLabel className="text-[#24479B] font-medium text-base">
                    Your Email
                  </FormLabel>
                  <input
                    {...field}
                    type="email"
                    placeholder="Enter your email ID"
                    className="w-full bg-transparent border-0 border-b border-gray-300 px-0 py-1 text-gray-900 placeholder:text-gray-400 focus:border-b-2 focus:border-[#10b981] focus:ring-0 focus:outline-none transition-all duration-300 text-sm md:text-base"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FormField
              control={form.control}
              name="phone"
              render={({
                field,
              }: {
                field: ControllerRenderProps<FormData, "phone">;
              }) => (
                <FormItem>
                  <FormLabel className="text-[#24479B] font-medium text-base">
                    Your Phone
                  </FormLabel>
                  <input
                    {...field}
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full bg-transparent border-0 border-b border-gray-300 px-0 py-1 text-gray-900 placeholder:text-gray-400 focus:border-b-2 focus:border-[#10b981] focus:ring-0 focus:outline-none transition-all duration-300 text-sm md:text-base"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FormField
              control={form.control}
              name="purpose"
              render={() => (
                <FormItem>
                  <FormLabel className="text-[#24479B] font-medium text-base mb-2 block">
                    Purpose
                  </FormLabel>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {purposeOptions.map((purpose) => {
                      const isSelected = form
                        .watch("purpose")
                        .includes(purpose);
                      return (
                        <button
                          key={purpose}
                          type="button"
                          onClick={() => togglePurpose(purpose)}
                          className={`px-4 py-3 rounded-none border-1 text-sm md:text-base font-sans font-medium transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? "bg-[#24479B] border-[#24479B] text-white"
                              : "bg-white border-gray-300 text-gray-700 hover:border-[#1e5ba8]"
                          }`}
                        >
                          {purpose}
                        </button>
                      );
                    })}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FormField
              control={form.control}
              name="message"
              render={({
                field,
              }: {
                field: ControllerRenderProps<FormData, "message">;
              }) => (
                <FormItem>
                  <FormLabel className="text-[#24479B] font-medium text-base">
                    Message
                  </FormLabel>
                  <textarea
                    {...field}
                    placeholder="Enter Your Message"
                    rows={4}
                    className="w-full bg-transparent border-0 border-b border-gray-300 px-0 py-1 text-gray-900 placeholder:text-gray-400 focus:border-b-2 focus:border-[#10b981] focus:ring-0 focus:outline-none transition-all duration-300 resize-none text-sm md:text-base"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto bg-[#14b8a6] hover:bg-[#0d9488] text-white px-8 py-6 rounded-none font-sans font-medium text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <ArrowRight className="ml-0 h-5 w-5" />
                </>
              )}
            </Button>
          </motion.div>
        </form>
      </Form>
    </motion.div>
  );
}
