import { features } from '@/data/features'
import { FeatureType } from '@/utils/types'

const Facilities = () => {
  return (
    <section className="py-20 bg-blue-50 text-center">
      <h2 className="text-4xl font-bold mb-10">Why Choose FeastHub?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {features.map((f: FeatureType, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition">
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
            <p className="text-blue-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Facilities
