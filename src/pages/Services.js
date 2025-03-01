import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Truck, Plane, BarChart2, Network, FileCheck, Users, ClipboardList, LayoutDashboard } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: 'AI-Driven Demand Forecasting',
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Smart Routing',
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Blockchain-Based Verification',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Custom Humanitarian Solutions',
    },
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: 'Automated Dispatch Management',
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Smart Contracts',
    },
    {
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: 'Centralized Dashboard',
    },
  ];

  const faqs = [
    {
      question: 'How can stakeholders access information?',
      answer: 'Description',
      date: 'Dec 14, 2023'
    },
    {
      question: 'What technology do we use for tracking?',
      answer: 'Description',
      date: 'Dec 14, 2023'
    },
    {
      question: 'How do you prioritize resource distribution?',
      answer: 'Description',
      date: 'Dec 14, 2023'
    },
    {
      question: 'What makes Chain Flow unique?',
      answer: 'Description',
      date: 'Dec 14, 2023'
    },
    {
      question: 'How does AI enhance our operations?',
      answer: 'Description',
      date: 'Dec 14, 2023'
    }
  ];

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      
      {/* Services Header */}
      <div className="container mx-auto py-16">
        <h1 className="text-5xl mb-6">
          Our <span className="text-red-500">Services</span>
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Chain Flow combines cutting-edge technology to enhance humanitarian logistics and supply chain management, ensuring timely and effective assistance in crisis situations.
        </p>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl flex flex-col gap-4"
            >
              <div className="text-blue-900">
                {service.icon}
              </div>
              <h3 className="text-lg">{service.title}</h3>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <button className="px-8 py-3 bg-blue-900 text-white rounded-full">
            GET STARTED
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto py-16">
        <h2 className="text-4xl mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg">{faq.question}</h3>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">{faq.date}</span>
                  <button className="text-blue-900">See more</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}