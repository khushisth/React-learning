export default function Statcard({ title, count, icon, color }) {
    return (
        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 cursor-pointer hover:border-gray-100 transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
                <div className="flex flex-col space-y-2">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{title}</p>
                    <h3 className="text-3xl font-bold text-gray-900">{count}</h3>
                </div>
                <div className={'bg-gradient-to-br from-blue-50 to-indigo-100 p-4 rounded-2xl shadow-lg'}>
                    <div className={`text-3xl`}>
                        {icon}
                    </div>
                </div>
            </div>
        </div>
    );
}