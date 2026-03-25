import { useState, FormEvent } from 'react';
import { CheckCircle2, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { createRoot } from 'react-dom/client';
import axios from "axios"
import './index.css';

createRoot(document.getElementById('root')!).render(
    <App />
);


const advantages = [
    "Conteúdo exclusivo semanal",
    "Acesso antecipado a novos produtos",
    "Dicas práticas direto no seu inbox",
    "Zero spam, apenas o que importa",
];

export default function App() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null)

        try {
            const res = await axios.post(import.meta.env.VITE_API_URL + "/v1/subs", {
                email: email
            })

            if (res.status != 201) {
                console.error("error sending information to the server, expected status 201")
            }

            console.log("server connected, message sending.")

            setIsSubscribed(true)
        } catch (err) {
            console.error("Error sending information to the server", err)
            setError("Servidor indisponível. Tente novamente em alguns minutos.")
        }
    };

    return (
        <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4 font-sans">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-zinc-100"
            >
                {!isSubscribed ? (
                    <>
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold text-zinc-900 tracking-tight mb-2">
                                Fique por dentro.
                            </h1>
                            <p className="text-zinc-500">
                                Junte-se a nossa comunidade e receba as melhores atualizações.
                            </p>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {advantages.map((advantage, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 text-zinc-700"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                    <span className="text-sm font-medium">{advantage}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                                <input
                                    type="email"
                                    required
                                    placeholder="e-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
                                />
                            </div>

                            {error && (
                                <p className='text-red-500 text-xs font-medium px-1'>{error}</p>
                            )}
                            <button
                                type="submit"
                                className="w-full bg-zinc-900 text-white font-semibold py-3 rounded-xl hover:bg-zinc-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                            >
                                Confirmar Inscrição
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <a className='text-gray-500 text-xs font-semibold' href='https://github.com/rickferrdev/front-sketch-service-email'>by github.com/rickferrdev</a>
                        </form>
                    </>
                ) : (
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center py-8"
                    >
                        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-zinc-900 mb-2">Quase lá!</h2>
                        <a className="text-zinc-500 mb-6">
                            Enviamos uma mensagem de confirmação <span className="font-semibold text-zinc-900">{email}</span>.
                        </a>
                        <button
                            onClick={() => setIsSubscribed(false)}
                            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
                        >
                            Voltar
                        </button>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}
