import React, { useState } from "react";
import { AppBar, Toolbar, Typography, TextField, IconButton, Paper, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useTheme } from "@mui/material/styles"; // Import theme hook

const Chatbot = () => {
  const theme = useTheme(); // Access the theme
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        overflow: "hidden", // Prevents overflow
        boxSizing: "border-box",
      }}
    >

      <Paper sx={{ flex: 1, p: 2, overflowY: "auto", width: "100%", boxSizing: "border-box" }}>
        {messages.map((msg, index) => (
          <Typography key={index} align={msg.sender === "user" ? "right" : "left"}>
            {msg.text}
          </Typography>
        ))}
      </Paper>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
          borderTop: `1px solid ${theme.palette.primary.main}`,
          backgroundColor: theme.palette.grey[200],
          width: "100%",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          sx={{
            flex: 1,
            mr: 1,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        />

        <IconButton
          onClick={handleSend}
          sx={{
            color: theme.palette.primary.main,
            flexShrink: 0,
            width: 48,
            height: 48,
          }}
        >
          <SendIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Chatbot;