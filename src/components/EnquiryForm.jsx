import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const EnquiryForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://formsubmit.co/ajax/logicfirst2022@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          _subject: `New LogicFirst Enquiry from ${data.name}`,
          _template: "table"
        })
      });
      
      const result = await response.json();
      if (result.success !== "true") {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("There was an issue sending your message. Please try WhatsApp.");
      throw error;
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass rounded-[3rem] p-8 md:p-16 border-emerald-50 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50/30 to-transparent hidden lg:block" />
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black font-display mb-6 text-slate-900 transition-colors">Let's Build Something <span className="text-emerald-500">Extraordinary</span></h2>
              <p className="text-lg text-slate-600 mb-8 transition-colors">
                Ready to take your business to the next level? Fill out the form and our strategies will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100 shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <p className="font-semibold text-slate-700 transition-colors">Free Consultation</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100 shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <p className="font-semibold text-slate-700 transition-colors">Custom Strategy Plan</p>
                </div>
              </div>
            </div>

            <div>
              {isSubmitSuccessful ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
                >
                  <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4 shadow-inner">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="text-slate-500 max-w-xs mx-auto mb-6">We'll be in touch very soon via logicfirst2022@gmail.com. Thank you for choosing MartBusy.</p>
                  <a 
                    href={`https://wa.me/918076901732?text=${encodeURIComponent(`Hi, I just submitted an enquiry on MartBusy.\nName: ${localStorage.getItem('last_enquiry_name') || 'Customer'}\nMessage: ${localStorage.getItem('last_enquiry_msg') || ''}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#128C7E] transition-all shadow-lg"
                  >
                    Follow up on WhatsApp
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit((data) => {
                  localStorage.setItem('last_enquiry_name', data.name);
                  localStorage.setItem('last_enquiry_msg', data.message);
                  onSubmit(data);
                })} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 px-1">Full Name</label>
                      <input 
                        {...register("name", { required: true })}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:bg-white transition-all shadow-sm placeholder:text-slate-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 px-1">Email Address</label>
                      <input 
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:bg-white transition-all shadow-sm placeholder:text-slate-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 px-1">Phone Number</label>
                    <input 
                      {...register("phone", { required: true })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:bg-white transition-all shadow-sm placeholder:text-slate-400"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 px-1">Your Message</label>
                    <textarea 
                      {...register("message", { required: true })}
                      rows="4"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:bg-white transition-all resize-none shadow-sm placeholder:text-slate-400"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-secondary active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-100 disabled:opacity-50 mt-4"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>Send Message <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" /></>
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
