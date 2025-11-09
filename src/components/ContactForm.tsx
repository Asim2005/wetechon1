"use client"

import type React from "react"

import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    robotCheck: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    })
  }

  const handleSubmit = async () => {
    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields",
      })
      return
    }
    if (!formData.robotCheck) {
      setSubmitStatus({
        type: "error",
        message: "Please confirm you are not a robot",
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: "", message: "" })

    try {
      const serviceId = "service_bg81dav"
      const templateId = "template_bplhw4t"
      const publicKey = "VfX9ZRNJDEVqjNnT7"

      // Get current time in a readable format
      const currentTime = new Date().toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })

      // Template parameters matching your EmailJS template
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "Not provided",
        subject: formData.subject,
        message: formData.message,
        time: currentTime,
      }

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        robotCheck: false,
      })
    } catch (error) {
      console.error("Email error:", error)

      setSubmitStatus({
        type: "error",
        message: `Failed to send message: ${error instanceof Error ? error.message : "Unknown error"}. Please try again later.`,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <div className="w-full max-w-xl mx-auto lg:ml-auto">
        <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Book a Consultation</h2>
          <p className="text-gray-600 mb-6">Find out how this could work for you.</p>

          {submitStatus.message && (
            <div
              className={`mb-4 p-4 rounded-md ${submitStatus.type === "success"
                  ? "bg-green-100 text-green-700 border border-green-400"
                  : "bg-red-100 text-red-700 border border-red-400"
                }`}
            >
              {submitStatus.message}
            </div>
          )}

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />

            <input
              type="email"
              name="email"
              placeholder="Your e-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your phone (optional)"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />

            <input
              type="text"
              name="subject"
              placeholder="E-mail subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />

            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
            ></textarea>

            <div className="flex items-center space-x-3 py-2">
              <input
                type="checkbox"
                name="robotCheck"
                id="robot-check"
                checked={formData.robotCheck}
                onChange={handleChange}
                className="w-5 h-5 border-2 border-gray-300 rounded focus:ring-2 focus:ring-cyan-400 cursor-pointer"
              />
              <label htmlFor="robot-check" className="text-sm text-gray-700 cursor-pointer">
                I'm not a robot
              </label>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-md transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
