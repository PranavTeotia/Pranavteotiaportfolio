import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import contact from '../../assets/contact.png';
import './Contact.css';
import Swal from 'sweetalert2';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
    const [state, handleSubmit] = useForm("mkgjvpgz");
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const customSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://formspree.io/f/mkgjvpgz", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                message: formData.message
            })
        });
        if (response.ok) {
            setFormData({ name: '', email: '', message: '' });
            Swal.fire({
                title: 'Thank You!',
                text: 'Your message has been sent successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div id='contact'>
            
            <img src={contact} alt="Contact Background" />
            
            <div className="contact-form">
                <h2>Get in Touch</h2>
                <form onSubmit={customSubmit}>
                    <input id="name" type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
                    
                    <input id="email" type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    
                    <textarea id="message" name="message" placeholder="Your Message" rows="4" required value={formData.message} onChange={handleChange}></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                    
                    <button type="submit" id='btn' disabled={state.submitting}>Send Message</button>
                    
                    <div className="social-buttons">
                        <a href="https://www.linkedin.com/in/pranav-teotia-8aa01a2a1/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                            <FaLinkedin size={20} /> LinkedIn
                        </a>
                        <a href="https://github.com/PranavTeotia" target="_blank" rel="noopener noreferrer" className="social-btn github">
                            <FaGithub size={20} /> GitHub
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
