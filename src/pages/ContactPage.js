import React, { useState } from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  padding-top: 120px;
  padding-bottom: ${(props) => props.theme.spacing.xxl};
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

const ContactContent = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.lg};
`;

const ContactTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: ${(props) => props.theme.spacing.md};
  text-align: center;
  color: ${(props) => props.theme.colors.text};
`;

const ContactSubtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: ${(props) => props.theme.spacing.xl};
  text-align: center;
  color: ${(props) => props.theme.colors.textSecondary};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.spacing.xl};

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const ContactFormContainer = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.borderRadius.large};
  padding: ${(props) => props.theme.spacing.xl};
  box-shadow: ${(props) => props.theme.shadows.medium};
`;

const ContactInfoContainer = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.borderRadius.large};
  padding: ${(props) => props.theme.spacing.xl};
  box-shadow: ${(props) => props.theme.shadows.medium};
`;

const ContactForm = styled.form``;

const FormGroup = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: ${(props) => props.theme.spacing.xs};
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
`;

const FormInput = styled.input`
  width: 100%;
  padding: ${(props) => props.theme.spacing.sm};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.small};
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: ${(props) => props.theme.spacing.sm};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.small};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  padding: ${(props) => props.theme.spacing.sm}
    ${(props) => props.theme.spacing.lg};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.disabled};
    cursor: not-allowed;
  }
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.text};
`;

const ContactInfoSection = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.lg};
`;

const ContactInfoSectionTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.primary};
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

const ContactInfoIcon = styled.span`
  font-size: 1.2rem;
  margin-right: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.primary};
`;

const ContactInfoText = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const ContactInfoLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.primaryDark};
    text-decoration: underline;
  }
`;

const MeetingSchedulerSection = styled.div`
  margin-top: ${(props) => props.theme.spacing.lg};
`;

const MeetingSchedulerTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.primary};
`;

const MeetingSchedulerFrame = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  padding: ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.surfaceLight};
`;

const MeetingOption = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing.sm};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

const MeetingPersonName = styled.span`
  font-weight: 500;
  margin-right: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.text};
`;

const MeetingScheduleButton = styled.a`
  background-color: ${(props) => props.theme.colors.surfaceLight};
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius.small};
  padding: ${(props) => props.theme.spacing.xs}
    ${(props) => props.theme.spacing.sm};
  font-size: 0.9rem;
  text-decoration: none;
  margin-left: auto;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  margin-top: ${(props) => props.theme.spacing.md};
  text-align: center;
`;

const ErrorMessage = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  margin-top: ${(props) => props.theme.spacing.md};
  text-align: center;
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false });

    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send the form data to your backend
      console.log("Form submitted:", formData);
      setFormStatus({ submitting: false, success: true, error: false });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <ContactContainer>
      <ContactContent>
        <ContactTitle>Get in Touch</ContactTitle>
        <ContactSubtitle>
          Have questions about Textify? Want to see how our AI-powered CRM can
          help your business? We're here to help you get started.
        </ContactSubtitle>

        <ContactGrid>
          <ContactFormContainer>
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="phone">Phone (optional)</FormLabel>
                <FormInput
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormInput
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={formStatus.submitting}>
                {formStatus.submitting ? "Sending..." : "Send Message"}
              </SubmitButton>

              {formStatus.success && (
                <SuccessMessage>
                  Thank you for your message! We'll get back to you soon.
                </SuccessMessage>
              )}

              {formStatus.error && (
                <ErrorMessage>
                  There was an error sending your message. Please try again.
                </ErrorMessage>
              )}
            </ContactForm>
          </ContactFormContainer>

          <ContactInfoContainer>
            <ContactInfoTitle>Contact Information</ContactInfoTitle>

            <ContactInfoSection>
              <ContactInfoSectionTitle>Email Us</ContactInfoSectionTitle>
              <ContactInfoItem>
                <ContactInfoIcon>✉️</ContactInfoIcon>
                <ContactInfoText>
                  <ContactInfoLink href="mailto:charlesjoly.textify@gmail.com">
                    charlesjoly.textify@gmail.com
                  </ContactInfoLink>
                </ContactInfoText>
              </ContactInfoItem>
              <ContactInfoItem>
                <ContactInfoIcon>✉️</ContactInfoIcon>
                <ContactInfoText>
                  <ContactInfoLink href="mailto:joshualim.textify@gmail.com">
                    joshualim.textify@gmail.com
                  </ContactInfoLink>
                </ContactInfoText>
              </ContactInfoItem>
            </ContactInfoSection>

            <ContactInfoSection>
              <ContactInfoSectionTitle>Call Us</ContactInfoSectionTitle>
              <ContactInfoItem>
                <ContactInfoIcon>📞</ContactInfoIcon>
                <ContactInfoText>
                  <ContactInfoLink href="tel:+1234567890">
                    (123) 456-7890
                  </ContactInfoLink>
                </ContactInfoText>
              </ContactInfoItem>
            </ContactInfoSection>

            <MeetingSchedulerSection>
              <MeetingSchedulerTitle>Schedule a Meeting</MeetingSchedulerTitle>
              <MeetingSchedulerFrame>
                <MeetingOption>
                  <MeetingPersonName>Charles Joly</MeetingPersonName>
                  <MeetingScheduleButton
                    href="https://calendly.com/charlesjoly-textify"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule
                  </MeetingScheduleButton>
                </MeetingOption>

                <MeetingOption>
                  <MeetingPersonName>Joshua Lim</MeetingPersonName>
                  <MeetingScheduleButton
                    href="https://calendly.com/joshualim-textify"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule
                  </MeetingScheduleButton>
                </MeetingOption>
              </MeetingSchedulerFrame>
            </MeetingSchedulerSection>
          </ContactInfoContainer>
        </ContactGrid>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactPage;
