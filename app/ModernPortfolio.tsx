'use client'

import React, { useState } from 'react'
import { Book, Brain, Code, FileText, Github, Linkedin, Mail, Moon, Sun, Briefcase, Phone, Twitter } from 'lucide-react'
import Link from 'next/link'

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
                <img 
                  src="/profile.png"
                  alt="John Zakkam" 
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
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
              <h1 className="text-4xl font-bold mb-4">John Zakkam</h1>
              {/* <h2 className="text-2xl mb-6">Exploring Generative AI, LLMs, and Computer Vision</h2> */}
              <p className="text-lg opacity-80">
                I&apos;m a curious builder and AI enthusiast exploring the intersection of reasoning, generative models, and multimodal systems. 
                I love tinkering with ideas that push the boundaries of what machines can understand and create. 
                When I&apos;m not building AI pipelines or diving into research papers, you&apos;ll find me on an exploration in the mountains or the gym.
                <br /><br />
                Let&apos;s connect and build something cool together!
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
                <h3 className="text-xl font-semibold mb-2">Research Engineer</h3>
                <p className="text-blue-500 mb-2">OnePlus India (July 2023 - Present)</p>
                <ul className="list-disc list-inside space-y-2 opacity-80">
                  <li>Worked on building agentic RAG pipelines for self-testing, reducing manual workload and boosting efficiency by 15x.</li>
                  <li>Developed transformer-based models for blind face restoration and deployed on android devices for real-time apps.</li>
                  <li>Worked with the AI team to build a magic eraser for images, removing unwanted objects with SoTA accuracy on-device.</li>
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
        </div>

        {/* Research Experience */}
        <section className={`p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm mb-8`}>
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-6 h-6 text-purple-500" />
            <h2 className="text-2xl font-bold">Research Experience</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Wichita State University</h3>
              <p className="text-purple-500 mb-2">Undergraduate Research Intern (2022 - 2023)</p>
              <ul className="list-disc list-inside opacity-80">
                <li>Collaborated with Dr. Ajita Rattani on Deepfake detection using self-supervised few-shot techniques and Vision Transformers.</li>
                <li>Achieved SoTA results with a Contrastive Vision Transformer model in cross-dataset deepfake detection.</li>
                <li>Research work CoDeiT got accepted to ICPR 2024, Kolkata.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">OnePlus Research India</h3>
              <p className="text-purple-500 mb-2">Summer Research Intern (2022)</p>
              <ul className="list-disc list-inside opacity-80">
                <li>Researched GAN compression, Knowledge Distillation, Image Inpainting, and Small Object Detection.</li>
                <li>Mainly worked on pruning, knowledge distillation, and quantization techniques for efficient inference on mobile devices.</li>
                <li>Research on small object detection got accepted to ACCV 2022, Singapore.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">IIITDM Kancheepuram</h3>
              <p className="text-purple-500 mb-2">Computer Vision Researcher (2022)</p>
              <ul className="list-disc list-inside opacity-80">
                <li>Developed a transformer U-Net based model for brain tumor segmentation from MR images using a curriculum learning approach.</li>
                <li>Worked in a funded project to detect cardiovascular diseases using Deep CNNs from retinal fundus imagery.</li>
                <li>Research work submitted to Elsevier, Computers in Biology and Medicine, 2024 (under review).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className={`p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm mb-8`}>
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold">Publications</h2>
          </div>
          <ul className="list-disc list-inside space-y-4 opacity-80">
            <li>
              S Sahayam, <span className="font-bold">J Zakkam</span>, U Jayaraman, &ldquo;Can we learn better with hard samples?&rdquo;, arXiv preprint arXiv:2304.03486, 2023
            </li>
            <li>
              <span className="font-bold">J Zakkam</span>, U Jayaraman, S Sahayam, A Rattani, &ldquo;CoDeiT: Contrastive data-efficient transformers for deepfake detection&rdquo;, International Conference on Pattern Recognition, 62-77, 2025 [ICPR 2024]
            </li>
            <li>
              A Mishra, <span className="font-bold">J Zakkam</span>, A Kumar, S Mandloi, K Anand, S Sowmya, A Thakur, &ldquo;Evaluating and bench-marking object detection models for traffic sign and traffic light datasets&rdquo;, Proceedings of the Asian Conference on Computer Vision, 338-353, 2022 [ACCV 2022]
            </li>
            <li>
              S Sahayam, <span className="font-bold">J Zakkam</span>, YS Varshan V, U Jayaraman, &ldquo;Detection of Under-represented Samples Using Dynamic Batch Training for Brain Tumor Segmentation from MR Images&rdquo;, arXiv preprint arXiv:2408.12013, 2024 [submitted to Computers in Biology and Medicine, Elsevier]
            </li>            
          </ul>
        </section>

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
            <h2 className="text-2xl font-bold">Current Interests</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <h3 className="font-semibold mb-2">LLM Research</h3>
              <p className="opacity-80">Exploring reasoning capabilities and test-time scaling</p>
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
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <Link href="tel:+919381545322" className="hover:text-blue-500">
                +91-9381545322
              </Link>
            </div>            
            <div className="flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              <Link href="https://linkedin.com/in/johnzakkam" target="_blank" className="hover:text-blue-500">
                johnzakkam
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Twitter className="w-5 h-5" />
              <Link href="https://twitter.com/john_zakkam" target="_blank" className="hover:text-blue-500">
                john_zakkam
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <Link href="mailto:johnzakkam2509@gmail.com" className="hover:text-blue-500">
                johnzakkam2509@gmail.com
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ModernPortfolio;