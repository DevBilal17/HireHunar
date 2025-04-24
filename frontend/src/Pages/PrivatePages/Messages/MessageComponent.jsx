import React from "react";
import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu, GiHumanCannonball } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const initialMessages = [
  {
    id: 1,
    name: "Jan Mayer",
    role: "Designer Candidate",
    time: "12 mins ago",
    message: [
      {
        from: "You",
        text: "Hey Jan, I wanted to reach out because we saw your work contributions and were impressed by your work.",
      },
      {
        from: "You",
        text: "We want to invite you for a quick interview",
      },
      {
        from: "Jan Mayer",
        text: "Hi Maria, sure I would love to. Thanks for taking the time to see my work!",
      },
    ],
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },

  // Add more users similarly
];

export default function MessageComponent() {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chatMessages");
    return saved ? JSON.parse(saved) : initialMessages;
  });
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const [selectedMessage, setSelectedMessage] = useState(messages[0]);

  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const updatedMessages = messages.map((msg) =>
      msg.id === selectedMessage.id
        ? {
            ...msg,
            message: [...msg.message, { from: "You", text: inputValue }],
          }
        : msg
    );

    setMessages(updatedMessages);
    setSelectedMessage(
      updatedMessages.find((m) => m.id === selectedMessage.id)
    );
    setInputValue("");
  };
  const [isOpen, setIsOpen] = useState(false);
  const [slide, setSlide] = useState(false);
  const slideRef = useRef(null); // Reference to the slide menu
  const buttonRef = useRef(null); // Reference to the toggle button

  // Handle the click outside to close the slide
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        slideRef.current &&
        !slideRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setSlide(false); // Close the slide if clicked outside
        setIsOpen(false); // Change the icon back
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex h-full w-full bg-white relative">
      {/* Sidebar */}
      <div
        ref={slideRef}
        className={` md:flex w-1/4 flex-col border-r bg-white ${
          !slide
            ? "lg:translate-x-0 -translate-x-[100%] "
            : "-translate-x-0 w-[235px]"
        } transition-all duration-200 h-full  lg:relative absolute left-0 top-0`}
      >
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2 bg-gray-100 rounded p-2">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search messages"
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>
        <div className="overflow-y-auto">
          {initialMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-center gap-3 p-4 hover:bg-gray-100 cursor-pointer border-b ${
                selectedMessage.id === msg.id ? "bg-blue-100" : ""
              }`}
              onClick={() => setSelectedMessage(msg)}
            >
              <img
                src={msg.img}
                alt={msg.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="hidden lg:block">
                <h4 className="font-medium">{msg.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 flex items-center justify-between border-b">
          <div className="flex items-center gap-4">
            <img
              src={selectedMessage.img}
              alt={selectedMessage.name}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">{selectedMessage.name}</h3>
            </div>
          </div>
          <button
            ref={buttonRef}
            className={`lg:hidden block $ text-3xl`}
            onClick={() => {
              setSlide(!slide);
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <RxCross2 /> : <GiHamburgerMenu />}
          </button>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          {selectedMessage.message.map((m, idx) => (
            <div
              key={idx}
              className={`flex mb-4 max-w-xl ${
                m.from === "You"
                  ? "self-end justify-end ml-auto text-right "
                  : "text-left"
              }`}
            >
              <p
                className={`p-3 rounded-xl shadow text-sm text-left ${
                  m.from === "You" ? "bg-blue-100" : "bg-gray-100"
                }`}
              >
                {m.text}
              </p>
            </div>
          ))}
          {selectedMessage.message.map((m, idx) => (
            <div
              key={idx}
              className={`flex mb-4 max-w-xl ${
                m.from === "You"
                  ? "self-end justify-end ml-auto text-right "
                  : "text-left"
              }`}
            >
              <p
                className={`p-3 rounded-xl shadow text-sm text-left ${
                  m.from === "You" ? "bg-blue-100" : "bg-gray-100"
                }`}
              >
                {m.text}
              </p>
            </div>
          ))}{" "}
          {selectedMessage.message.map((m, idx) => (
            <div
              key={idx}
              className={`flex mb-4 max-w-xl ${
                m.from === "You"
                  ? "self-end justify-end ml-auto text-right "
                  : "text-left"
              }`}
            >
              <p
                className={`p-3 rounded-xl shadow text-sm text-left ${
                  m.from === "You" ? "bg-blue-100" : "bg-gray-100"
                }`}
              >
                {m.text}
              </p>
            </div>
          ))}{" "}
          {selectedMessage.message.map((m, idx) => (
            <div
              key={idx}
              className={`flex mb-4 max-w-xl ${
                m.from === "You"
                  ? "self-end justify-end ml-auto text-right "
                  : "text-left"
              }`}
            >
              <p
                className={`p-3 rounded-xl shadow text-sm text-left ${
                  m.from === "You" ? "bg-blue-100" : "bg-gray-100"
                }`}
              >
                {m.text}
              </p>
            </div>
          ))}
        </div>
        <div className="p-4 border-t flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Reply message"
            className="flex-1 border rounded-full p-2 px-4 mr-2 focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
