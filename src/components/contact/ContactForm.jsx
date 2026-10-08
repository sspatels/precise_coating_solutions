import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CircleAlert, CircleCheck, LoaderCircle, Send } from 'lucide-react';
import Reveal from '../common/Reveal';
import { services } from '../../data/servicesData';
import './ContactForm.css';

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  location: '',
  service: '',
  message: '',
  consent: false,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Indian mobile/landline: optional +91 / 0, then 10 digits (spaces & dashes allowed)
const PHONE_PATTERN = /^(?:\+?91[\s-]?|0)?[1-9]\d{9}$/;

function validate(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  const phone = values.phone.replace(/[\s-]/g, '');
  if (!phone) errors.phone = 'Please enter your contact number.';
  else if (!PHONE_PATTERN.test(phone)) errors.phone = 'Please enter a valid 10-digit contact number.';
  if (!values.location.trim()) errors.location = 'Please enter the project location.';
  if (!values.message.trim()) errors.message = 'Please tell us a little about your requirement.';
  else if (values.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.';
  return errors;
}

/** Field wrapper with label + error message wired for screen readers */
function Field({ id, label, required, error, children, full }) {
  return (
    <div className={`form-field ${full ? 'form-field--full' : ''} ${error ? 'has-error' : ''}`}>
      <label htmlFor={id} className="form-field__label">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="form-field__error" role="alert">
          <CircleAlert size={14} aria-hidden="true" /> {error}
        </p>
      )}
    </div>
  );
}

function ContactForm() {
  const [searchParams] = useSearchParams();
  const preselected = services.some((s) => s.id === searchParams.get('service')) ? searchParams.get('service') : '';

  const [values, setValues] = useState({ ...initialValues, service: preselected });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstInvalid = event.currentTarget.querySelector(`[name="${Object.keys(validationErrors)[0]}"]`);
      firstInvalid?.focus();
      return;
    }

    setStatus('loading');
    try {
      // TODO: Connect contact form to backend/email service
      // e.g. await fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) })
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus('success');
      setValues(initialValues);
    } catch {
      setStatus('error');
    }
  };

  const inputProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
  });

  return (
    <Reveal className="contact-form" delay={0.1}>
      <div className="contact-form__head">
        <h2 className="contact-form__title">Send Us a Message</h2>
        <p>
          Fields marked <span className="text-orange">*</span> are required.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            className="contact-form__status contact-form__status--success"
            role="status"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <CircleCheck size={48} aria-hidden="true" />
            <h3>Thank you! Your enquiry has been received.</h3>
            <p>Our team will get back to you as soon as possible.</p>
            <button type="button" className="contact-form__reset" onClick={() => setStatus('idle')}>
              Send another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" noValidate onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="contact-form__grid">
              <Field id="contact-fullName" label="Full Name" required error={errors.fullName}>
                <input type="text" autoComplete="name" placeholder="Your full name" {...inputProps('fullName')} />
              </Field>

              <Field id="contact-email" label="Email" required error={errors.email}>
                <input type="email" autoComplete="email" placeholder="you@example.com" {...inputProps('email')} />
              </Field>

              <Field id="contact-phone" label="Contact Number" required error={errors.phone}>
                <input type="tel" autoComplete="tel" inputMode="tel" placeholder="10-digit mobile number" {...inputProps('phone')} />
              </Field>

              <Field id="contact-location" label="Project Location" required error={errors.location}>
                <input type="text" autoComplete="address-level2" placeholder="City / Area" {...inputProps('location')} />
              </Field>

              <Field id="contact-service" label="Service Interested In" full>
                <select {...inputProps('service')}>
                  <option value="">Select a service (optional)</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                  <option value="other">Other / Not sure</option>
                </select>
              </Field>

              <Field id="contact-message" label="Message" required error={errors.message} full>
                <textarea rows={5} placeholder="Describe the problem or your requirement…" {...inputProps('message')} />
              </Field>
            </div>

            <label className="contact-form__consent">
              <input type="checkbox" name="consent" checked={values.consent} onChange={handleChange} />
              <span>I authorize the representatives to call, SMS, email or WhatsApp me about products and offers.</span>
            </label>

            {status === 'error' && (
              <p className="contact-form__status contact-form__status--error" role="alert">
                <CircleAlert size={18} aria-hidden="true" /> Something went wrong. Please try again or call us directly.
              </p>
            )}

            <button type="submit" className="btn btn--primary btn--lg contact-form__submit" disabled={status === 'loading'}>
              {status === 'loading' ? (
                <>
                  <LoaderCircle size={18} className="contact-form__spinner" aria-hidden="true" /> Sending…
                </>
              ) : (
                <>
                  Send Message <Send size={18} className="btn__arrow" aria-hidden="true" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </Reveal>
  );
}

export default ContactForm;
