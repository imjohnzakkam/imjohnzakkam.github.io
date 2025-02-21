'use client'

import React, { useState } from 'react'
import { Book, Brain, Code, FileText, Github, Linkedin, Mail, Moon, Sun, Briefcase, Phone, Twitter } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const ModernPortfolio = () => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'} pb-4`}>
      {/* Navigation */}
      <nav className={`fixed w-full ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg z-50`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">John Zakkam</h1>
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="public/john_resume.pdf" download className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
              Download CV
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pt-20">
        {/* Hero Section */}
        <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm mb-8`}>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-64 flex flex-col items-center gap-6">
              <div className="w-48 h-48 rounded-full bg-gray-200 overflow-hidden">
                <Image 
                  src="/profile.png"
                  alt="John Zakkam" 
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/imjohnzakkam" target="_blank" className="hover:text-blue-500">
                  <Github size={24} />
                </a>
                <a href='https://x.com/john_zakkam' target="_blank" className="hover:text-blue-500">
                  <Twitter size={24} />
                </a>
                <a href="https://linkedin.com/in/johnzakkam" target="_blank" className="hover:text-blue-500">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:johnzakkam2509@gmail.com" className="hover:text-blue-500">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">Deep Learning Research Engineer</h1>
              <h2 className="text-2xl mb-6">OnePlus Research India</h2>
              <p className="text-lg opacity-80">
                Focused on advancing the boundaries of AI through research in Generative Models, 
                Large Language Models and Computer Vision.
              </p>
            </div>
          </div>
        </section>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Work Experience */}
          <section className={`p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm`}>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-bold">Work Experience</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Deep Learning Research Engineer</h3>
                <p className="text-blue-500 mb-2">OnePlus India (July 2023 - Present)</p>
                <ul className="list-disc list-inside space-y-2 opacity-80">
                  <li>Enhanced ViT architecture using fourier attention for better global receptive field</li>
                  <li>Finetuned Qwen-VL, Llama2 using LORA techniques</li>
                  <li>Developed GAN ensembles for blind face-restoration</li>
                  <li>Led AI pipelines improving workflows by 7x</li>
                  <li>Enhanced self-test pipelines by 15x using chain-of-thought prompting</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className={`p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm`}>
            <div className="flex items-center gap-3 mb-6">
              <Book className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Integrated Masters in Computer Science</h3>
              <p className="text-green-500 mb-2">IIIT Chennai (2018 - 2023)</p>
              <ul className="list-disc list-inside space-y-2 opacity-80">
                <li>Worked on Deep Learning with extensive research experience in Computer Vision and GenAI</li>
                <li>Teching assistant for Programming in C, Pattern Recognition, Deep Learning, Image Processing and Computer Vision courses</li>                
                <li>Final year thesis on Deepfake Detection using Contrastive Learning and Vision Transformers</li>
              </ul>
            </div>
          </section>

          {/* Research Experience */}
          <section className={`p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm`}>
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-bold">Research Experience</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Wichita State University</h3>
                <p className="text-purple-500 mb-2">Undergraduate Research Intern (2022 - 2023)</p>
                <p className="opacity-80">Collaborated with Dr. Ajita Rattani on Deepfake detection using self-supervised few-shot techniques and Vision Transformers</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">OnePlus Research India</h3>
                <p className="text-purple-500 mb-2">Summer Research Intern (2022)</p>
                <p className="opacity-80">Researched GAN compression, Knowledge Distillation, and Small Object Detection</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">IIITDM Kancheepuram</h3>
                <p className="text-purple-500 mb-2">Computer Vision Researcher (2022)</p>
                <p className="opacity-80">Worked on retinal blood vessel defects using Deep CNNs</p>
              </div>
            </div>
          </section>

          {/* Publications */}
          <section className={`p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm`}>
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">Publications</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">CoDeiT: Contrastive Data-efficient Transformers</h3>
                <p className="opacity-80">First Author - Research on deepfake detection</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Object Detection Models Evaluation</h3>
                <p className="opacity-80">ACCV Workshops 2022 - Traffic sign and light detection</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Learning with Hard Samples</h3>
                <p className="opacity-80">Submitted to CVPR Workshop ECV 2023</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">FourierFormer</h3>
                <p className="opacity-80">Vision Transformers with Frequency-Aware Attention</p>
              </div>
            </div>
          </section>
        </div>

        {/* Technical Skills */}
        <section className={`p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm mb-8`}>
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl font-bold">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <h3 className="font-semibold mb-2">Programming</h3>
              <p className="opacity-80">C/C++, Python, JavaScript</p>
            </div>
            <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <h3 className="font-semibold mb-2">Frameworks</h3>
              <p className="opacity-80">PyTorch, Tensorflow, Keras, ONNX</p>
            </div>
            <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <h3 className="font-semibold mb-2">Tools</h3>
              <p className="opacity-80">VS Code, Colab, Jupyter, Git, Azure</p>
            </div>
          </div>
        </section>

        {/* Side Projects */}
        <section className={`p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm mb-8`}>
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-6 h-6 text-indigo-500" />
            <h2 className="text-2xl font-bold">Current Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <h3 className="font-semibold mb-2">Advanced LLM Research</h3>
              <p className="opacity-80">Exploring reasoning capabilities and knowledge graph integration</p>
            </div>
            <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <h3 className="font-semibold mb-2">RAG Systems</h3>
              <p className="opacity-80">Developing efficient vector search and retrieval systems</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={`p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm mb-8`}>
          <div className="flex items-center gap-3 mb-6">
            <Phone className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl font-bold">Contact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <Link href="mailto:johnzakkam2509@gmail.com" className="hover:text-blue-500">
                johnzakkam2509@gmail.com
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              <Link href="https://linkedin.com/in/johnzakkam" target="_blank" className="hover:text-blue-500">
                linkedin.com/in/johnzakkam
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ModernPortfolio;