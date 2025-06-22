"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Utensils, HeartPulse, Activity, Stethoscope, FileText, Building } from "lucide-react"
import Link from "next/link"

export default function ShifaCirclePage() {
  const services = [
    {
      icon: <Stethoscope className="h-10 w-10 text-teal-600" />,
      title: "Medical Consultations",
      description:
        "Brief, general check-ups and discussions about health concerns with qualified medical professionals.",
      importance:
        "Early detection of potential health issues and guidance on managing existing conditions are vital for long-term well-being.",
    },
    {
      icon: <Utensils className="h-10 w-10 text-teal-600" />,
      title: "BMI (Body Mass Index) Screening",
      description: "A measure of body fat based on height and weight, calculated to assess your weight category.",
      importance:
        "Helps identify weight categories that may lead to health problems such as heart disease, diabetes, and high blood pressure.",
    },
    {
      icon: <HeartPulse className="h-10 w-10 text-teal-600" />,
      title: "Blood Pressure Monitoring",
      description:
        "Measurement of the pressure of blood against the walls of your arteries as your heart pumps it around your body.",
      importance:
        "Essential for detecting hypertension (high blood pressure), a major risk factor for heart disease, stroke, and kidney disease.",
    },
    {
      icon: <Activity className="h-10 w-10 text-teal-600" />,
      title: "Blood Sugar Screening",
      description: "A test to measure the amount of glucose (sugar) in your blood at a specific moment.",
      importance:
        "Crucial for identifying pre-diabetes and diabetes, conditions that can lead to serious health complications if left unmanaged.",
    },
  ]

  const professionals = [
    {
      name: "Dr. Aisha Khan",
      specialty: "Practitioner",
      workplace: "City Health Clinic",
      imageUrl: "/placeholder.svg?width=100&height=100",
      fallback: "AK",
    },
    {
      name: "Dr. Omar Hassan",
      specialty: "Cardiologist",
      workplace: "Heartbeat Medical Center",
      imageUrl: "/placeholder.svg?width=100&height=100",
      fallback: "OH",
    },
    {
      name: "Nurse Fatima Ali",
      specialty: "Registered Nurse",
      workplace: "Community Care Hospital",
      imageUrl: "/placeholder.svg?width=100&height=100",
      fallback: "FA",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2">
            <HeartPulse className="h-8 w-8 text-teal-600" />
            <span className="text-2xl font-bold text-teal-700">Shifa Circle</span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="#services" className="text-gray-700 hover:text-teal-600 transition-colors">
              Services
            </Link>
            <Link href="#events" className="text-gray-700 hover:text-teal-600 transition-colors">
              Events
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">
              About Us
            </Link>
            <Link href="#team" className="text-gray-700 hover:text-teal-600 transition-colors">
              Our Team
            </Link>
          </nav>
          {/* Mobile Menu Button can be added here */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-teal-600 text-white">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?width=1200&height=800"
            alt="Abstract background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Welcome to Shifa Circle</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-teal-100">
            Shifa Circle is a non-profit organization dedicated to providing accessible healthcare services. We operate as a free clinic, often hosted at local masjids, with professional doctors on site to serve our community.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50" asChild>
              <Link href="#services">Learn More</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
            >
              <Link href="#events">Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a range of free health screenings and consultations to help you stay informed about your health.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-start gap-4 pb-4">
                  <div className="bg-teal-100 p-3 rounded-full">{service.icon}</div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-800">{service.title}</CardTitle>
                    <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium text-gray-700 mb-1">Why it's important:</h4>
                  <p className="text-sm text-gray-600">{service.importance}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="py-8 bg-teal-50">
        <div className="container mx-auto px-4 md:px-6">
          <img
            src="/placeholder.svg?width=1200&height=300"
            alt="Community health fair"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Calendar and Event Request Section */}
      <section id="events" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Upcoming Events & Clinic Schedule</h2>
              <p className="text-lg text-gray-600 mb-8">
                Stay updated with our clinic days and community health events. We continuously update our schedule.
              </p>
              <Card className="shadow-lg">
                <CardContent className="p-0">
                  {/* 
                    To add your own Google Calendar, follow these steps:
                    1. Go to your Google Calendar settings.
                    2. Under "Settings for my calendars", select the calendar you want to share.
                    3. Scroll down to the "Integrate calendar" section.
                    4. Copy the "Embed code" (it starts with '<iframe...').
                    5. Replace the entire iframe below with the code you copied.
                  */}
                                    <div className="w-full">
                    <iframe 
                      src="https://calendar.google.com/calendar/embed?src=syedhshah2004%40gmail.com&ctz=America%2FNew_York" 
                      style={{ border: 0 }} 
                      width="100%" 
                      height="600" 
                      frameBorder="0" 
                      scrolling="no"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
              <p className="mt-4 text-sm text-gray-500">
                Note: This calendar is for illustrative purposes. Please check our official channels for the most
                current event dates.
              </p>
            </div>
            <div className="lg:col-span-2">
              <Card className="bg-white p-6 shadow-lg">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="h-8 w-8 text-teal-600" />
                    <CardTitle className="text-2xl font-semibold text-gray-800">Request to Host Your Event</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-600 mb-6">
                    Interested in collaborating or having Shifa Circle at your community event or masjid? Please reach
                    out to us by filling out our request form.
                  </p>
                  <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      Event Request Form (Link Here)
                    </Link>
                  </Button>
                  <p className="mt-2 text-xs text-gray-500 text-center">We'll get back to you as soon as possible.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Shifa Circle</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  We started Shifa Circle because we saw a critical need within our community. South Asian and Arab
                  populations are genetically predisposed to conditions like diabetes, hypertension, and obesity.
                </p>
                <p>
                  Compounding this, these same populations experience concerning rates of being uninsured, particularly
                  across New Jersey. At Shifa Circle, we believe in the power of preventative care as the first and most
                  crucial step.
                </p>
                <p>
                  Our goal is to catch potential health issues early and recommend proactive lifestyle changes before
                  disease takes hold, fostering a healthier, more informed community.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?width=600&height=400"
                alt="Diverse community members"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Professionals Section */}
      <section id="team" className="py-16 md:py-24 bg-teal-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Healthcare Professionals</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Meet some of the dedicated professionals who volunteer their time and expertise at Shifa Circle.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionals.map((prof) => (
              <Card key={prof.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-teal-200">
                    <AvatarImage src={prof.imageUrl || "/placeholder.svg"} alt={prof.name} />
                    <AvatarFallback className="bg-teal-500 text-white text-3xl">{prof.fallback}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-gray-800">{prof.name}</h3>
                  <p className="text-teal-600 font-medium">{prof.specialty}</p>
                  <div className="mt-2 text-sm text-gray-500 flex items-center justify-center gap-1">
                    <Building size={14} /> {prof.workplace}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer and Disclaimer */}
      <footer className="py-12 bg-gray-800 text-gray-300">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="mb-6">
            <HeartPulse className="h-10 w-10 text-teal-400 mx-auto mb-2" />
            <h3 className="text-2xl font-semibold text-white">Shifa Circle</h3>
            <p className="mt-1 text-teal-200">Committed to Community Health & Preventative Care</p>
          </div>

          <p className="text-sm mb-2">Shifa Circle is a non-profit organization.</p>
          <p className="text-xs max-w-3xl mx-auto mb-8 leading-relaxed">
            Important: Student volunteers are not doctors, nor are they qualified to provide medical advice. We may
            recommend lifestyle changes based on your vitals. Medical consultations and specific medical advice should
            instead be directed toward your primary care physician or the professional doctors present at our clinic
            sessions.
          </p>
          <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Shifa Circle. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
