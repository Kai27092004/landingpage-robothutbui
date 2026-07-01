"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const predefinedQuestions = [
  "Pin sử dụng được bao lâu?",
  "Tránh vật cản hoạt động như thế nào?",
  "Có hút tốt lông thú cưng không?",
  "Bảo hành bao gồm những gì?",
];

const responses: Record<string, string> = {
  "Pin sử dụng được bao lâu?": "Robot Hút Bụi hoạt động lên đến 180 phút với một lần sạc, đủ cho ngôi nhà lên tới 230m².",
  "Tránh vật cản hoạt động như thế nào?": "Camera AI tiên tiến và cảm biến 3D ToF của chúng tôi phát hiện vật cản nhỏ tới 10mm, tự động tránh va chạm.",
  "Có hút tốt lông thú cưng không?": "Chắc chắn rồi! Sản phẩm có bàn chải chống rối được thiết kế riêng cho lông thú cưng, với lực hút 5000Pa.",
  "Bảo hành bao gồm những gì?": "Mỗi sản phẩm đi kèm bảo hành 2 năm từ nhà sản xuất bao gồm lỗi kỹ thuật và trục trặc.",
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Xin chào! Tôi có thể giúp gì cho bạn về Robot Hút Bụi Thông Minh?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = (text?: string) => {
    const message = text || inputValue;
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { text: message, isUser: true }]);
    setInputValue("");

    // Simulate response
    setTimeout(() => {
      const response = responses[message] || "Cảm ơn câu hỏi của bạn! Đội ngũ chúng tôi sẽ phản hồi sớm nhất.";
      setMessages((prev) => [...prev, { text: response, isUser: false }]);
    }, 500);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-accent hover:bg-accent/90 text-white rounded-full shadow-2xl flex items-center justify-center z-40 transition-colors"
        aria-label="Open chat"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-white dark:bg-secondary rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200 dark:border-gray-800"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-accent to-primary text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold">Hỗ Trợ</h3>
                  <p className="text-xs text-white/80">Đang trực tuyến</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isUser
                        ? "bg-accent text-white"
                        : "bg-muted dark:bg-dark text-gray-800 dark:text-gray-200"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Questions */}
            {messages.length <= 1 && (
              <div className="p-4 border-t border-gray-200 dark:border-gray-800 space-y-2">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Câu hỏi nhanh:</p>
                {predefinedQuestions.map((question) => (
                  <button
                    key={question}
                    onClick={() => handleSend(question)}
                    className="w-full text-left px-3 py-2 text-sm bg-muted dark:bg-dark hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Nhập tin nhắn của bạn..."
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-dark focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  onClick={() => handleSend()}
                  className="w-10 h-10 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
