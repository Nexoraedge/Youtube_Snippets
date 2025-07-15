"use client"
import { BugIcon, XIcon, Send, User, Mail, AlertTriangle } from 'lucide-react'
import { toast, ToastContainer } from 'react-toastify'
import React, { useState } from 'react'

const Report_bug = () => {

    //add a pop up after submitted saying - we have recived your concern  , we will get back to you soon
    const notify = () => toast.success("Thank you for your feedback!");
    const [open, setOpen] = useState(false)
    const [form_Data, setform_Data] = useState({
        name: '',
        email: '',
        issue: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleInputChange = (e: any) => {
        const { name, value } = e.target
        setform_Data(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setIsSubmitting(true)
        //console.log(form_Data)
        try {
            //console.log("Submitting bug report...",form_Data)
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/error`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(form_Data),
              });
            
            setSubmitted(true)
            //popup
            notify()

            setTimeout(() => {
                setSubmitted(false)
                setOpen(false)
                setform_Data({ name: '', email: '', issue: '' })
            }, 2000)
        } catch (error) {
            console.error('Error submitting bug report:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const isFormValid = form_Data.name.trim() && form_Data.email.trim() && form_Data.issue.trim()

    return (

        <div className='flex bottom-5 right-5 fixed z-50'>
            <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} closeOnClick={false} theme="dark" />
            {open && (
                <>
                    {/* Backdrop */}
                    <div 
                        className='fixed inset-0 bg-black/20 backdrop-blur-sm z-40'
                        onClick={() => setOpen(false)}
                    />
                    
                    {/* Modal */}
                    <div className='bg-gray-900/95 backdrop-blur-md border border-gray-700/50 w-[90vw] max-w-md rounded-2xl h-auto max-h-[80vh] z-50 fixed bottom-5 right-5 shadow-2xl shadow-black/50'>
                        {/* Header */}
                        <header className='flex justify-between items-center p-6 border-b border-gray-700/50'>
                            <div className='flex items-center gap-3'>
                                <div className='p-2 bg-red-500/20 rounded-lg'>
                                    <BugIcon className='w-5 h-5 text-red-400' />
                                </div>
                                <h3 className='text-lg font-semibold text-white'>Report Bug</h3>
                            </div>
                            <button 
                                onClick={() => setOpen(false)}
                                className='p-2 hover:bg-gray-800 cursor-pointer rounded-lg transition-colors duration-200 text-gray-400 hover:text-white'
                            >
                                <XIcon className='w-5 h-5' />
                            </button>
                        </header>

                        {/* Form */}
                        <div className='p-6 space-y-4'>
                            {/* Name Field */}
                            <div className='space-y-2'>
                                <label className='text-sm font-medium text-gray-200 flex items-center gap-2'>
                                    <User className='w-4 h-4' />
                                    Your Name
                                </label>
                                <input 
                                    type="text"
                                    name="name"
                                    value={form_Data.name}
                                    onChange={handleInputChange}
                                    placeholder='DeadPool'
                                    className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200'
                                    required
                                />
                            </div>

                            {/* Email Field */}
                            <div className='space-y-2'>
                                <label className='text-sm font-medium text-gray-200 flex items-center gap-2'>
                                    <Mail className='w-4 h-4' />
                                    Email
                                </label>
                                <input 
                                    type="email"
                                    name="email"
                                    value={form_Data.email}
                                    onChange={handleInputChange}
                                    placeholder='some12@gmail.com'
                                    className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200'
                                    required
                                />
                            </div>

                            {/* Issue Field */}
                            <div className='space-y-2'>
                                <label className='text-sm font-medium text-gray-200 flex items-center gap-2'>
                                    <AlertTriangle className='w-4 h-4' />
                                    Describe the Issue
                                </label>
                                <textarea 
                                    name="issue"
                                    value={form_Data.issue}
                                    onChange={handleInputChange}
                                    placeholder='Please describe the bug you encountered...'
                                    rows={4}
                                    className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-200'
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className='pt-4'>
                                <button
                                    onClick={handleSubmit}
                                    disabled={!isFormValid || isSubmitting}
                                    className={`w-full py-3 px-4 rounded-lg cursor-pointer font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                                        submitted 
                                            ? 'bg-green-500 text-white' 
                                            : isFormValid && !isSubmitting
                                                ? 'bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-red-500/25 hover:scale-[1.02]'
                                                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                    }`}
                                >
                                    {submitted ? (
                                        <>
                                            <div className='w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin'></div>
                                            Submitted!
                                        </>
                                    ) : isSubmitting ? (
                                        <>
                                            <div className='w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin'></div>
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            <Send className='w-5 h-5' />
                                            Submit Report
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
            
            {/* Floating Action Button */}
            {!open && (
                <button 
                    onClick={() => setOpen(true)}
                    className='bg-red-500 cursor-pointer hover:bg-red-600 text-white p-4 rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-110 hover:rotate-12 group relative overflow-hidden'
                >
                    <div className='absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    <BugIcon className='w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300' />
                    
                    {/* Pulse animation */}
                    <div className='absolute inset-0 rounded-full bg-red-500 opacity-20 animate-ping'></div>
                </button>
            )}
        </div>
    )
}

export default Report_bug