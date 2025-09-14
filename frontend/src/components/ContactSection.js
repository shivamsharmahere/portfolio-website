// import React, { useState } from "react";import React, { useState } from "react";import React, { useSt  const handleSubmit = (e) => {

// import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

// import { portfolioData } from "../data/mock";import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";    e.preventDefault();



// const ContactSection = () => {import { portfolioData } from "../data/mock";    setIsSubmitting(true);

//   const [formData, setFormData] = useState({

//     name: "",

//     email: "",

//     subject: "",const ContactSection = () => {    // Mock form submission

//     message: ""

//   });  const [formData, setFormData] = useState({    setTimeout(() => {

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const [submitMessage, setSubmitMessage] = useState("");    name: "",      setSubmitMessage("Message sent successfully! Thank you for reaching out. I'll get back to you soon.");



//   const handleInputChange = (e) => {    email: "",      setFormData({ name: "", email: "", subject: "", message: "" });

//     setFormData({

//       ...formData,    subject: "",      setIsSubmitting(false);

//       [e.target.name]: e.target.value

//     });    message: ""      

//   };

//   });      // Clear success message after 5 seconds

//   const handleSubmit = (e) => {

//     e.preventDefault();  const [isSubmitting, setIsSubmitting] = useState(false);      setTimeout(() => setSubmitMessage(""), 5000);

//     setIsSubmitting(true);

//   const [submitMessage, setSubmitMessage] = useState("");    }, 2000);

//     // Mock form submission

//     setTimeout(() => {  };act";

//       setSubmitMessage("Message sent successfully! Thank you for reaching out. I'll get back to you soon.");

//       setFormData({ name: "", email: "", subject: "", message: "" });  const handleInputChange = (e) => {import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

//       setIsSubmitting(false);

//           setFormData({import { portfolioData } from "../data/mock";

//       // Clear success message after 5 seconds

//       setTimeout(() => setSubmitMessage(""), 5000);      ...formData,

//     }, 2000);

//   };      [e.target.name]: e.target.valueconst ContactSection = () => {



//   return (    });  const [formData, setFormData] = useState({

//     <section id="contact" className="py-20 bg-gray-900">

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">  };    name: "",

//         <div className="text-center mb-16">

//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">    email: "",

//             Let's Work Together

//           </h2>  const handleSubmit = (e) => {    subject: "",

//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">

//             Have a project in mind or want to collaborate? I'd love to hear from you.    e.preventDefault();    message: ""

//           </p>

//         </div>    setIsSubmitting(true);  });



//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">  const [isSubmitting, setIsSubmitting] = useState(false);

//           {/* Contact Info */}

//           <div className="space-y-8">    // Mock form submission  const [submitMessage, setSubmitMessage] = useState("");

//             <div>

//               <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>    setTimeout(() => {

//               <p className="text-gray-300 leading-relaxed mb-8">

//                 I'm always open to discussing new opportunities, interesting projects,       setSubmitMessage("Message sent successfully! Thank you for reaching out. I'll get back to you soon.");  const handleInputChange = (e) => {

//                 or potential collaborations in the field of AI and machine learning.

//               </p>      setFormData({ name: "", email: "", subject: "", message: "" });    setFormData({

//             </div>

//       setIsSubmitting(false);      ...formData,

//             {/* Contact details */}

//             <div className="space-y-6">            [e.target.name]: e.target.value

//               <div className="flex items-center space-x-4">

//                 <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">      // Clear success message after 5 seconds    });

//                   <Mail className="w-6 h-6 text-blue-400" />

//                 </div>      setTimeout(() => setSubmitMessage(""), 5000);  };

//                 <div>

//                   <p className="text-white font-medium">Email</p>    }, 2000);

//                   <a 

//                     href={`mailto:${portfolioData.personalInfo.email}`}  };  const handleSubmit = async (e) => {

//                     className="text-gray-400 hover:text-blue-400 transition-colors"

//                   >    e.preventDefault();

//                     {portfolioData.personalInfo.email}

//                   </a>  return (    setIsSubmitting(true);

//                 </div>

//               </div>    <section id="contact" className="py-20 bg-gray-900">



//               <div className="flex items-center space-x-4">      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">    // Mock form submission

//                 <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">

//                   <Phone className="w-6 h-6 text-green-400" />        <div className="text-center mb-16">    setTimeout(() => {

//                 </div>

//                 <div>          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">      toast({

//                   <p className="text-white font-medium">Phone</p>

//                   <a             Let's Work Together        title: "Message Sent Successfully!",

//                     href={`tel:${portfolioData.personalInfo.phone}`}

//                     className="text-gray-400 hover:text-green-400 transition-colors"          </h2>        description: "Thank you for reaching out. I'll get back to you soon.",

//                   >

//                     {portfolioData.personalInfo.phone}          <p className="text-xl text-gray-400 max-w-3xl mx-auto">      });

//                   </a>

//                 </div>            Have a project in mind or want to collaborate? I'd love to hear from you.      setFormData({ name: "", email: "", subject: "", message: "" });

//               </div>

//           </p>      setIsSubmitting(false);

//               <div className="flex items-center space-x-4">

//                 <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">        </div>    }, 2000);

//                   <MapPin className="w-6 h-6 text-purple-400" />

//                 </div>  };

//                 <div>

//                   <p className="text-white font-medium">Location</p>        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

//                   <p className="text-gray-400">{portfolioData.personalInfo.location}</p>

//                 </div>          {/* Contact Info */}  return (

//               </div>

//             </div>          <div className="space-y-8">    <section id="contact" className="py-20 bg-gray-900">



//             {/* Social Links */}            <div>      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

//             <div>

//               <h4 className="text-lg font-medium text-white mb-4">Connect with me</h4>              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>        <div className="text-center mb-16">

//               <div className="flex space-x-4">

//                 <a              <p className="text-gray-300 leading-relaxed mb-8">          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">

//                   href={portfolioData.personalInfo.github}

//                   target="_blank"                I'm always open to discussing new opportunities, interesting projects,             Let's Work Together

//                   rel="noopener noreferrer"

//                   className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"                or potential collaborations in the field of AI and machine learning.          </h2>

//                 >

//                   <Github className="w-5 h-5 text-gray-300" />              </p>          <p className="text-xl text-gray-400 max-w-3xl mx-auto">

//                 </a>

//                 <a            </div>            Have a project in mind or want to collaborate? I'd love to hear from you.

//                   href={portfolioData.personalInfo.linkedin}

//                   target="_blank"          </p>

//                   rel="noopener noreferrer"

//                   className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"            {/* Contact details */}        </div>

//                 >

//                   <Linkedin className="w-5 h-5 text-white" />            <div className="space-y-6">

//                 </a>

//                 <a              <div className="flex items-center space-x-4">        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

//                   href={`mailto:${portfolioData.personalInfo.email}`}

//                   className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-500 transition-colors"                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">          {/* Contact Info */}

//                 >

//                   <Mail className="w-5 h-5 text-white" />                  <Mail className="w-6 h-6 text-blue-400" />          <div className="space-y-8">

//                 </a>

//               </div>                </div>            <div>

//             </div>

//           </div>                <div>              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>



//           {/* Contact Form */}                  <p className="text-white font-medium">Email</p>              <p className="text-gray-300 leading-relaxed mb-8">

//           <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">

//             <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>                  <a                 I'm always open to discussing new opportunities, interesting projects, 

            

//             {submitMessage && (                    href={`mailto:${portfolioData.personalInfo.email}`}                or potential collaborations in the field of AI and machine learning.

//               <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">

//                 <p className="text-green-400">{submitMessage}</p>                    className="text-gray-400 hover:text-blue-400 transition-colors"              </p>

//               </div>

//             )}                  >            </div>



//             <form onSubmit={handleSubmit} className="space-y-6">                    {portfolioData.personalInfo.email}

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//                 <div>                  </a>            {/* Contact details */}

//                   <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">

//                     Name                </div>            <div className="space-y-6">

//                   </label>

//                   <input              </div>              <div className="flex items-center space-x-4">

//                     type="text"

//                     id="name"                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">

//                     name="name"

//                     value={formData.name}              <div className="flex items-center space-x-4">                  <Mail className="w-6 h-6 text-blue-400" />

//                     onChange={handleInputChange}

//                     required                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">                </div>

//                     className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"

//                     placeholder="Your name"                  <Phone className="w-6 h-6 text-green-400" />                <div>

//                   />

//                 </div>                </div>                  <h4 className="text-white font-medium">Email</h4>

//                 <div>

//                   <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">                <div>                  <a 

//                     Email

//                   </label>                  <p className="text-white font-medium">Phone</p>                    href={`mailto:${portfolioData.personalInfo.email}`}

//                   <input

//                     type="email"                  <a                     className="text-gray-400 hover:text-blue-400 transition-colors"

//                     id="email"

//                     name="email"                    href={`tel:${portfolioData.personalInfo.phone}`}                  >

//                     value={formData.email}

//                     onChange={handleInputChange}                    className="text-gray-400 hover:text-green-400 transition-colors"                    {portfolioData.personalInfo.email}

//                     required

//                     className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"                  >                  </a>

//                     placeholder="your.email@example.com"

//                   />                    {portfolioData.personalInfo.phone}                </div>

//                 </div>

//               </div>                  </a>              </div>



//               <div>                </div>

//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">

//                   Subject              </div>              <div className="flex items-center space-x-4">

//                 </label>

//                 <input                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">

//                   type="text"

//                   id="subject"              <div className="flex items-center space-x-4">                  <Phone className="w-6 h-6 text-green-400" />

//                   name="subject"

//                   value={formData.subject}                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">                </div>

//                   onChange={handleInputChange}

//                   required                  <MapPin className="w-6 h-6 text-purple-400" />                <div>

//                   className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"

//                   placeholder="What's this about?"                </div>                  <h4 className="text-white font-medium">Phone</h4>

//                 />

//               </div>                <div>                  <a 



//               <div>                  <p className="text-white font-medium">Location</p>                    href={`tel:${portfolioData.personalInfo.phone}`}

//                 <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">

//                   Message                  <p className="text-gray-400">{portfolioData.personalInfo.location}</p>                    className="text-gray-400 hover:text-green-400 transition-colors"

//                 </label>

//                 <textarea                </div>                  >

//                   id="message"

//                   name="message"              </div>                    {portfolioData.personalInfo.phone}

//                   value={formData.message}

//                   onChange={handleInputChange}            </div>                  </a>

//                   required

//                   rows={5}                </div>

//                   className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"

//                   placeholder="Tell me about your project or idea..."            {/* Social Links */}              </div>

//                 />

//               </div>            <div>



//               <button              <h4 className="text-lg font-medium text-white mb-4">Connect with me</h4>              <div className="flex items-center space-x-4">

//                 type="submit"

//                 disabled={isSubmitting}              <div className="flex space-x-4">                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">

//                 className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"

//               >                <a                  <MapPin className="w-6 h-6 text-purple-400" />

//                 {isSubmitting ? (

//                   <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />                  href={portfolioData.personalInfo.github}                </div>

//                 ) : (

//                   <>                  target="_blank"                <div>

//                     <Send className="w-5 h-5" />

//                     <span>Send Message</span>                  rel="noopener noreferrer"                  <h4 className="text-white font-medium">Location</h4>

//                   </>

//                 )}                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"                  <p className="text-gray-400">{portfolioData.personalInfo.location}</p>

//               </button>

//             </form>                >                </div>

//           </div>

//         </div>                  <Github className="w-5 h-5 text-gray-300" />              </div>

//       </div>

//     </section>                </a>            </div>

//   );

// };                <a



// export default ContactSection;                  href={portfolioData.personalInfo.linkedin}            {/* Social links */}

//                   target="_blank"            <div>

//                   rel="noopener noreferrer"              <h4 className="text-white font-medium mb-4">Connect with me</h4>

//                   className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"              <div className="flex space-x-4">

//                 >                <a

//                   <Linkedin className="w-5 h-5 text-white" />                  href={portfolioData.personalInfo.github}

//                 </a>                  target="_blank"

//                 <a                  rel="noopener noreferrer"

//                   href={`mailto:${portfolioData.personalInfo.email}`}                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"

//                   className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-500 transition-colors"                >

//                 >                  <Github className="w-6 h-6" />

//                   <Mail className="w-5 h-5 text-white" />                </a>

//                 </a>                <a

//               </div>                  href={portfolioData.personalInfo.linkedin}

//             </div>                  target="_blank"

//           </div>                  rel="noopener noreferrer"

//                   className="w-12 h-12 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-200"

//           {/* Contact Form */}                >

//           <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">                  <Linkedin className="w-6 h-6" />

//             <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>                </a>

//                           </div>

//             {submitMessage && (            </div>

//               <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">          </div>

//                 <p className="text-green-400">{submitMessage}</p>

//               </div>          {/* Contact Form */}

//             )}          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">

//             <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

//             <form onSubmit={handleSubmit} className="space-y-6">            

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">            <form onSubmit={handleSubmit} className="space-y-6">

//                 <div>              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//                   <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">                <div>

//                     Name                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">

//                   </label>                    Name *

//                   <input                  </label>

//                     type="text"                  <input

//                     id="name"                    type="text"

//                     name="name"                    id="name"

//                     value={formData.name}                    name="name"

//                     onChange={handleInputChange}                    value={formData.name}

//                     required                    onChange={handleInputChange}

//                     className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"                    required

//                     placeholder="Your name"                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"

//                   />                    placeholder="Your name"

//                 </div>                  />

//                 <div>                </div>

//                   <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">                

//                     Email                <div>

//                   </label>                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">

//                   <input                    Email *

//                     type="email"                  </label>

//                     id="email"                  <input

//                     name="email"                    type="email"

//                     value={formData.email}                    id="email"

//                     onChange={handleInputChange}                    name="email"

//                     required                    value={formData.email}

//                     className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"                    onChange={handleInputChange}

//                     placeholder="your.email@example.com"                    required

//                   />                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"

//                 </div>                    placeholder="your@email.com"

//               </div>                  />

//                 </div>

//               <div>              </div>

//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">

//                   Subject              <div>

//                 </label>                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">

//                 <input                  Subject *

//                   type="text"                </label>

//                   id="subject"                <input

//                   name="subject"                  type="text"

//                   value={formData.subject}                  id="subject"

//                   onChange={handleInputChange}                  name="subject"

//                   required                  value={formData.subject}

//                   className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"                  onChange={handleInputChange}

//                   placeholder="What's this about?"                  required

//                 />                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"

//               </div>                  placeholder="What's this about?"

//                 />

//               <div>              </div>

//                 <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">

//                   Message              <div>

//                 </label>                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">

//                 <textarea                  Message *

//                   id="message"                </label>

//                   name="message"                <textarea

//                   value={formData.message}                  id="message"

//                   onChange={handleInputChange}                  name="message"

//                   required                  value={formData.message}

//                   rows={5}                  onChange={handleInputChange}

//                   className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"                  required

//                   placeholder="Tell me about your project or idea..."                  rows={6}

//                 />                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"

//               </div>                  placeholder="Tell me about your project or idea..."

//                 ></textarea>

//               <button              </div>

//                 type="submit"

//                 disabled={isSubmitting}              <button

//                 className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"                type="submit"

//               >                disabled={isSubmitting}

//                 {isSubmitting ? (                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed"

//                   <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />              >

//                 ) : (                {isSubmitting ? (

//                   <>                  <>

//                     <Send className="w-5 h-5" />                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>

//                     <span>Send Message</span>                    <span>Sending...</span>

//                   </>                  </>

//                 )}                ) : (

//               </button>                  <>

//             </form>                    <Send className="w-5 h-5" />

//           </div>                    <span>Send Message</span>

//         </div>                  </>

//       </div>                )}

//     </section>              </button>

//   );            </form>

// };          </div>

//         </div>

// export default ContactSection;      </div>
//     </section>
//   );
// };

// export default ContactSection;