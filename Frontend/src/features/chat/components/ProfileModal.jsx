import { X, User, Mail, Crown, Calendar, MessageSquare, Bot, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { logout, getMe } from "../service/auth.api";



const ProfileModal = ({ open, onClose, chats }) => {

   const [user, setUser] = useState(null);

    useEffect(() => {
        if (!open) return;

        const fetchUser = async () => {
            try {
                const data = await getMe();
                setUser(data.user);
            } catch (err) {
                console.log(err);
            }
        };

        fetchUser();
    }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-[440px] rounded-3xl border border-white/10 bg-[#0f172a] p-6 shadow-2xl"
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            My Profile
          </h2>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Avatar */}
        <div className="mb-6 flex flex-col items-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-3xl font-bold">
            {user?.username?.charAt(0).toUpperCase() || "A"}
          </div>

          <h3 className="mt-4 text-lg font-semibold text-white">
            {user?.username || "Loading..."}
          </h3>

          <p className="text-gray-400">
             Mern Stack Developer
          </p>
        </div>

        {/* Info */}
        <div className="space-y-3">

          <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
            <Mail size={18} />
            <div>
              <p className="text-xs text-gray-400">Email</p>
              <p className="text-white">
                {user?.email || "Loading..."}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
            <Crown size={18} className="text-yellow-400" />
            <div>
              <p className="text-xs text-gray-400">Plan</p>
              <p className="text-white">Free</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
            <Calendar size={18} />
            <div>
              <p className="text-xs text-gray-400">Joined</p>
              <p className="text-white">
                {user?.createdAt
                   ? new Date(user.createdAt).toLocaleDateString()
                   : "Loading..."}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
            <MessageSquare size={18} />
            <div>
              <p className="text-xs text-gray-400">Total Chats</p>
              <p className="text-white">
                {Object.keys(chats).length}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
            <Bot size={18} />
            <div>
              <p className="text-xs text-gray-400">AI Model</p>
              <p className="text-white">
                Gemini Flash
              </p>
            </div>
          </div>

        </div>

        {/* <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-red-500 py-3 font-semibold text-white hover:bg-red-600">
          <LogOut size={18} />
          Logout
        </button> */}

        <button
           onClick={async () => {
             await logout();

             localStorage.clear();

             window.location.href = "/login";
          }}
          className="mt-4 w-full rounded-xl bg-red-600 py-3 text-white"
       >
           Logout
        </button>

      </motion.div>
    </div>
  );
};

export default ProfileModal;