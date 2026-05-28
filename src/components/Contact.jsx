import { useForm, ValidationError } from '@formspree/react'

export function Contact() {
  const [state, handleSubmit] = useForm('xwvzwgvv')

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 scroll-fade-in">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-syne text-3xl sm:text-4xl font-semibold mb-12">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div>
            <h3 className="font-syne text-xl font-semibold mb-6">Contact Details</h3>

            <div className="space-y-8">
              <div>
                <p className="font-dm-mono text-xs uppercase tracking-wider text-accent mb-2">Email</p>
                <a href="mailto:tonuciigiovanni@gmail.com" className="text-text-primary hover:text-accent transition-colors">
                  tonuciigiovanni@gmail.com
                </a>
              </div>

              <div>
                <p className="font-dm-mono text-xs uppercase tracking-wider text-accent mb-2">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/tonucci-giovanni-94127b300/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-accent transition-colors"
                >
                  linkedin.com/in/tonucci-giovanni-94127b300
                </a>
              </div>

              <div>
                <p className="font-dm-mono text-xs uppercase tracking-wider text-accent mb-2">GitHub</p>
                <a
                  href="https://github.com/TonucciGiovanni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-accent transition-colors"
                >
                  github.com/TonucciGiovanni
                </a>
              </div>

              <div>
                <p className="font-dm-mono text-xs uppercase tracking-wider text-accent mb-2">Location</p>
                <p className="text-text-secondary">
                  Nairobi, Kenya · Open to Remote
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-syne text-xl font-semibold mb-6">Send a Message</h3>

            {state.succeeded && (
              <div className="mb-6 p-4 bg-green-400/10 border border-green-400/50 rounded-lg text-green-400 text-sm">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-dm-mono text-xs uppercase tracking-wider text-accent mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-accent/30 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
                <ValidationError field="name" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="email" className="block font-dm-mono text-xs uppercase tracking-wider text-accent mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-accent/30 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
                <ValidationError field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="subject" className="block font-dm-mono text-xs uppercase tracking-wider text-accent mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-accent/30 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                  placeholder="What's this about?"
                />
                <ValidationError field="subject" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block font-dm-mono text-xs uppercase tracking-wider text-accent mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-accent/30 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
                <ValidationError field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full px-6 py-3 bg-accent text-dark-bg font-dm-sans font-semibold rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
