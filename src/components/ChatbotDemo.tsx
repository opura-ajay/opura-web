"use client"
import { useState, useEffect, useRef } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  price: number;
  originalPrice: number;
  discount: number;
  tags?: string[];
}

interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  delay: number;
  isProductGrid?: boolean;
  products?: Product[];
}

interface ChatbotDemoProps {
  title: string;
  description: string;
  messages: ChatMessage[];
}

const ChatbotDemo: React.FC<ChatbotDemoProps> = ({ title, description, messages }) => {
  const [displayedMessages, setDisplayedMessages] = useState<ChatMessage[]>([]);
  const [loop, setLoop] = useState(0);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [displayedMessages]);

  useEffect(() => {
    const timers: Array<ReturnType<typeof setTimeout>> = [];

    messages.forEach((message) => {
      const timer = setTimeout(() => {
        setDisplayedMessages((prev) => [...prev, message]);
      }, message.delay);
      timers.push(timer);
    });

    // After all messages are displayed, wait 5 seconds then restart
    const totalDelay = Math.max(...messages.map(m => m.delay)) + 5000;
    const loopTimer = setTimeout(() => {
      setDisplayedMessages([]);
      setLoop(prev => prev + 1);
    }, totalDelay);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      clearTimeout(loopTimer);
    };
  }, [messages, loop]);

  const productImages = [
    '/products/athena.jpg',
    '/products/varanga.jpg',
    '/products/mango.jpg'
  ];

  return (
    <div className="relative w-full">
      {/* Chat Window */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 h-96 md:h-[500px] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-4 border-b border-slate-600 flex items-center justify-between flex-shrink-0">
          <div>
            <h3 className="text-white font-bold text-lg">{title}</h3>
            <p className="text-slate-400 text-xs">{description}</p>
          </div>
          {/* Window Controls */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>

        {/* Messages Area - Only This Scrolls */}
        <div 
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-800/50 scroll-smooth"
          style={{ scrollBehavior: 'smooth' }}
        >
          {displayedMessages.map((message, idx) => (
            <div
              key={`${loop}-${message.id}`}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
            >
              {message.sender === 'bot' && message.isProductGrid ? (
                // Horizontal Product Cards
                <div className="w-full overflow-x-auto px-2">
                  <div className="flex gap-3 pb-2">
                    {message.products?.map((product, productIdx) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-lg overflow-hidden flex-shrink-0 w-48 shadow-md hover:shadow-lg transition-all"
                      >
                        {/* Product Image */}
                        <div className="w-full h-48 bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 flex items-center justify-center overflow-hidden">
                          <img
                            src={productImages[productIdx]}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-3 space-y-2">
                          {/* Rating Badge */}
                          <div className="flex items-center justify-between">
                            <div className="bg-[#20d9a3] text-black px-2 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1">
                              <span>★</span>
                              <span>{product.rating}</span>
                            </div>
                            {product.discount > 0 && (
                              <div className="bg-red-500 text-white px-1.5 py-0.5 rounded-full text-xs font-bold">
                                -{product.discount}%
                              </div>
                            )}
                          </div>

                          {/* Name & Description */}
                          <div>
                            <h4 className="font-bold text-gray-900 text-sm truncate">
                              {product.name}
                            </h4>
                            <p className="text-xs text-gray-600 line-clamp-1">
                              {product.description}
                            </p>
                          </div>

                          {/* Tags */}
                          <div className="flex gap-1 flex-wrap">
                            {product.tags?.slice(0, 2).map((tag: string, idx: number) => (
                              <span
                                key={idx}
                                className="text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Price */}
                          <div className="flex items-center gap-1">
                            <span className="text-xs line-through text-gray-400">
                              ₹{product.originalPrice}
                            </span>
                            <span className="font-bold text-[#20d9a3] text-sm">
                              ₹{product.price}
                            </span>
                          </div>

                          {/* Add to Cart Button */}
                          <button className="w-full bg-[#20d9a3] text-black px-3 py-1.5 rounded text-xs font-semibold hover:bg-[#20d9a3]/90 transition-all">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                // Regular Text Message
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-[#20d9a3] text-black rounded-br-none'
                      : 'bg-slate-700 text-white rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="bg-slate-800 border-t border-slate-700 p-3 flex gap-2 flex-shrink-0">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-slate-700 text-white rounded-lg px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#20d9a3]"
            disabled
          />
          <button className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.488 5.951 1.488a1 1 0 001.169-1.409l-7-14z" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ChatbotDemo;