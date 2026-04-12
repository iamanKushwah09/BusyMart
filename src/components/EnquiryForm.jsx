import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const EnquiryForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();

  const onSubmit = async (data) => {
    // Using Web3Forms for target email amankushwah073@gmail.com
    const formData = new FormData();
    formData.append("access_key", "73b3e244-a526-4444-9694-82a129d59265"); // Note: User should replace with their own key at web3forms.com
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("message", data.message);
    formData.append("from_name", "BusyMart Enquiry");
    formData.append("subject", `New BusyMart Enquiry from ${data.name}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const res = await response.json();
      if (res.success) {
        console.log("Success", res);
      } else {
        console.log("Error", res);
        throw new Error(res.message);
      }
    } catch (error) {
      alert("Something went wrong! Please try again or contact us on WhatsApp.");
      throw error;
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass rounded-[3rem] p-8 md:p-16 border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent hidden lg:block" />
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black font-display mb-6 text-slate-900 dark:text-white transition-colors">Let's Build Something <span className="text-primary">Extraordinary</span></h2>
              <p className="text-lg text-slate-600 dark:text-white/60 mb-8 transition-colors">
                Ready to take your business to the next level? Fill out the form and our strategies will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <p className="font-medium text-slate-700 dark:text-white/80 transition-colors">Free Consultation</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <p className="font-medium text-slate-700 dark:text-white/80 transition-colors">Custom Strategy Plan</p>
                </div>
              </div>
            </div>

            <div>
              {isSubmitSuccessful ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="text-white/60">We'll be in touch very soon. Thank you for choosing BusyMart.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-500 dark:text-white/50 px-1 transition-colors">Full Name</label>
                      <input 
                        {...register("name", { required: true })}
                        className="w-full bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl py-4 px-6 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-500 dark:text-white/50 px-1 transition-colors">Email Address</label>
                      <input 
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        className="w-full bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl py-4 px-6 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/50 px-1">Phone Number</label>
                    <input 
                      {...register("phone", { required: true })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/50 px-1">Your Message</label>
                    <textarea 
                      {...register("message", { required: true })}
                      rows="4"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>Send Message <Send className="w-5 h-5" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
