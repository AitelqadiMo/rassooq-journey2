import { motion } from "framer-motion";
import { useState } from "react";
import { 
  HelpCircle, 
  Package, 
  CreditCard, 
  RotateCcw, 
  Crown, 
  Store, 
  Search,
  ChevronDown,
  MessageCircle,
  Phone,
  Mail
} from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      id: "orders",
      title: "Orders & Delivery",
      icon: Package,
      color: "primary",
      questions: [
        {
          question: "How can I track my order?",
          answer: "You can track your order in real-time through your account dashboard. We'll also send you SMS and email updates at each stage of delivery. Simply go to 'My Orders' and click on the order you want to track."
        },
        {
          question: "What if my package is late or delayed?",
          answer: "If your package is delayed beyond the estimated delivery time, please contact our 24/7 support team. We'll investigate with our delivery partners and provide compensation or expedited replacement if needed."
        },
        {
          question: "Can I change my delivery address after placing an order?",
          answer: "You can change your delivery address within 2 hours of placing the order, provided it hasn't been dispatched yet. Go to 'My Orders' and select 'Change Address' or contact support immediately."
        },
        {
          question: "Do you offer same-day delivery?",
          answer: "Yes! Same-day delivery is available in major cities for orders placed before 2 PM. This service is available for Rassooq+ members and for orders above 200 AED."
        }
      ]
    },
    {
      id: "payments",
      title: "Payments & Billing",
      icon: CreditCard,
      color: "secondary",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, Mastercard, AMEX), debit cards, PayPal, Apple Pay, Google Pay, bank transfers, and Cash on Delivery (COD) in select areas."
        },
        {
          question: "Is Cash on Delivery (COD) available?",
          answer: "Yes, COD is available in most areas with a small handling fee. You can pay with cash or card to our delivery partner when your order arrives."
        },
        {
          question: "Why was my payment declined?",
          answer: "Payment declines can happen due to insufficient funds, bank security measures, expired cards, or incorrect billing information. Please verify your details and try again, or contact your bank."
        },
        {
          question: "Can I get a tax invoice for my purchase?",
          answer: "Yes, tax invoices are automatically generated for all purchases and can be downloaded from your order history. They're also sent to your registered email address."
        }
      ]
    },
    {
      id: "returns",
      title: "Returns & Refunds",
      icon: RotateCcw,
      color: "accent",
      questions: [
        {
          question: "How do I return an item?",
          answer: "Returns are easy! Go to 'My Orders', select the item you want to return, choose your reason, and schedule a free pickup. Most items can be returned within 30 days of delivery."
        },
        {
          question: "When will I receive my refund?",
          answer: "Refunds are processed within 3-5 business days after we receive and verify your returned item. The money will be credited back to your original payment method."
        },
        {
          question: "Can I exchange an item instead of returning it?",
          answer: "Yes! For size or color exchanges, you can select 'Exchange' instead of 'Return' when initiating the return process. We'll send you the replacement item once we receive your return."
        },
        {
          question: "What items cannot be returned?",
          answer: "Personal care items, underwear, custom-made products, perishable goods, and digital products cannot be returned for hygiene and safety reasons."
        }
      ]
    },
    {
      id: "rassooq-plus",
      title: "Rassooq+ Membership",
      icon: Crown,
      color: "flash",
      questions: [
        {
          question: "What is Rassooq+ and what are the benefits?",
          answer: "Rassooq+ is our premium membership offering free delivery on all orders, exclusive deals, early access to sales, priority customer support, and special member-only events and products."
        },
        {
          question: "How much does Rassooq+ cost?",
          answer: "Rassooq+ costs 99 AED per year or 12 AED per month. You can try it free for 30 days and cancel anytime during the trial period."
        },
        {
          question: "How do I cancel my Rassooq+ subscription?",
          answer: "You can cancel your Rassooq+ membership anytime from your account settings. Go to 'Membership' > 'Manage Subscription' > 'Cancel Membership'. You'll keep benefits until your current billing period ends."
        },
        {
          question: "Can I share my Rassooq+ benefits with family?",
          answer: "Yes! Rassooq+ Family allows you to share benefits with up to 4 family members at the same address. The family plan costs 149 AED per year."
        }
      ]
    },
    {
      id: "selling",
      title: "Selling on Rassooq",
      icon: Store,
      color: "tertiary",
      questions: [
        {
          question: "How do I start selling on Rassooq?",
          answer: "Getting started is simple! Click 'Sell with Rassooq', complete the registration form, verify your business documents, and set up your store. Our onboarding team will guide you through the entire process."
        },
        {
          question: "What are the seller fees and commissions?",
          answer: "Our commission rates range from 5-15% depending on the category. There are no listing fees or monthly subscriptions. You only pay when you sell. Premium seller plans with additional features are available."
        },
        {
          question: "How do payouts work for sellers?",
          answer: "Payouts are processed weekly, every Friday, for orders delivered the previous week. Funds are transferred directly to your registered bank account. You can track all payouts in your seller dashboard."
        },
        {
          question: "What support do you provide to sellers?",
          answer: "We provide 24/7 seller support, free promotional tools, inventory management, analytics dashboard, marketing assistance, and dedicated account managers for high-volume sellers."
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 glass-premium px-6 py-3 rounded-full mb-8">
              <HelpCircle className="w-5 h-5" />
              <span className="font-semibold">Help Center</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked
              <span className="block bg-gradient-to-r from-flash via-primary to-accent bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-12">
              Find quick answers to common questions about shopping, selling, and using Rassooq
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
              <Input
                type="text"
                placeholder="Search for help topics, orders, returns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-md rounded-2xl text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {filteredCategories.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">No results found</h3>
              <p className="text-muted-foreground mb-8">
                Try searching with different keywords or browse our categories below
              </p>
              <Button onClick={() => setSearchQuery("")} variant="outline">
                Clear Search
              </Button>
            </motion.div>
          ) : (
            <div className="space-y-16">
              {filteredCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-premium p-8 rounded-3xl border border-primary/5"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-3 rounded-2xl bg-${category.color}/10`}>
                      <category.icon className={`w-8 h-8 text-${category.color}`} />
                    </div>
                    <h2 className="font-display text-3xl font-bold">{category.title}</h2>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.id}-${index}`}
                        className="glass-card rounded-2xl border border-border/50 px-6"
                      >
                        <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold mb-6">Still Need Help?</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Our support team is available 24/7 to assist you with any questions
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-2xl hover:shadow-glow transition-all duration-500">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Live Chat</h3>
                <p className="text-muted-foreground mb-6">
                  Get instant help from our support team
                </p>
                <Button className="w-full">Start Chat</Button>
              </div>

              <div className="glass-card p-8 rounded-2xl hover:shadow-glow transition-all duration-500">
                <Phone className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-6">
                  Speak directly with our experts
                </p>
                <Button variant="outline" className="w-full">+971 800 RASSOOQ</Button>
              </div>

              <div className="glass-card p-8 rounded-2xl hover:shadow-glow transition-all duration-500">
                <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Email Support</h3>
                <p className="text-muted-foreground mb-6">
                  Send us your detailed questions
                </p>
                <Button variant="outline" className="w-full">support@rassooq.com</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;