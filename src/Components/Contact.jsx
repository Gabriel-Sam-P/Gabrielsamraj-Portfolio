import React, { useRef, useState } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';
import emailjs from '@emailjs/browser';

const Contact = ({ darkMode }) => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfolioofgabriel",          // ✅ Your EmailJS Service ID
        "contacttemplateportfolio",    // ✅ Your Template ID
        form.current,
        "aMYM1GDm0jITpCEFK"            // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setStatus({ type: "success", message: "Message sent successfully!" });
          form.current.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          setStatus({ type: "error", message: "Failed to send message. Try again!" });
        }
      );
  };

  return (
    <section id="contact" style={{ height: {lg:"450px",sm:""} }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        Contact
      </Typography>

      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "40px", md: "80px" },
            width: "100%",
            maxWidth: "1200px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Form Section */}
          <Box
            component="form"
            ref={form}
            onSubmit={sendEmail}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "500px",
              width: "100%",
            }}
          >
            {/* Name & Email */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: "10px", md: "20px" },
              }}
            >
              <TextField
                fullWidth
                label="Name *"
                name="from_name"   // ✅ matches {{from_name}}
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Email *"
                name="from_email"  // ✅ matches {{from_email}}
                variant="outlined"
              />
            </Box>

            {/* Message */}
            <TextField
              fullWidth
              label="Message"
              name="message"      // ✅ matches {{message}}
              multiline
              rows={5}
              variant="outlined"
            />

            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              sx={{
                padding: "12px",
                background: "linear-gradient(to right, #007bff, #00c6ff)",
                color: "white",
                borderRadius: "6px",
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": {
                  background: "linear-gradient(to right, #005ec2, #0090cc)",
                },
              }}
            >
              Send Message
            </Button>

            {/* Status Message */}
            {status && (
              <Alert severity={status.type} sx={{ mt: 2 }}>
                {status.message}
              </Alert>
            )}
          </Box>

          {/* Info Section */}
          <Box
            sx={{
              maxWidth: "400px",
              width: "100%",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="h4" sx={{ marginBottom: "8px" }}>
              Gabriel Sam Raj
            </Typography>
            <Typography>Front-End Developer</Typography>

            <Box sx={{ marginTop: "30px" }}>
              <Typography variant="h6">Phone</Typography>
              <Typography>+91-968928626</Typography>
            </Box>

            <Box sx={{ marginTop: "30px" }}>
              <Typography variant="h6">Email</Typography>
              <Typography>p.gabrielsamraj@gmail.com</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Contact;
