import React from 'react';

const Success = () => {
    return (
        <div>
            <div className="py-16 bg-purple-50">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
      <p className="text-gray-600">Real families, real happiness</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        { name: "Bruno", owner: "Tanzim Rahman", story: "Bruno has brought so much joy to our family. Best decision ever!" },
        { name: "Luna", owner: "Nadia Islam", story: "Luna helped my daughter overcome anxiety. They're inseparable now." },
        { name: "Max", owner: "Rahim Khan", story: "Adopted Max 8 months ago. He's the most loyal companion." }
      ].map((story, i) => (
        <div key={i} className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="text-6xl mb-4">🐾</div>
          <p className="italic text-gray-600 mb-4">"{story.story}"</p>
          <div className="font-semibold">{story.name}</div>
          <div className="text-sm text-gray-500">Adopted by {story.owner}</div>
        </div>
      ))}
    </div>
  </div>
</div>
        </div>
    );
};

export default Success;