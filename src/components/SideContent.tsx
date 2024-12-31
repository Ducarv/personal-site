export function SideContent() {
    return (
      <div className="p-10 space-y-16 bg-white text-black">
        {/* Presentation */}
        <div className="space-y-6">
          <h1 className="text-7xl font-extrabold text-primary">Software Engineer</h1>
          <p className="text-3xl text-gray-700">
            Passionate about creating <span className="text-primary">intuitive</span> and{" "}
            <span className="text-black">engaging</span> user experiences. Specialize in
            transforming ideas into beautifully crafted products.
          </p>
        </div>
  
        {/* Experience */}
        <div className="space-y-8">
          <h1 className="text-6xl font-bold text-black">Experience</h1>
          <p className="text-3xl text-primary">
            Making a difference for the main Brazilian players
          </p>
  
          <div className="space-y-4">
            <h2 className="text-5xl font-semibold text-gray-800">Compass.UOL</h2>
            <p className="text-xl text-black">Infos</p>
            <p className="text-lg text-gray-600">Jun 2023 - Present</p>
          </div>
        </div>
  
        {/* Skills */}
        <div className="space-y-6">
          <h2 className="text-6xl font-bold text-primary">Skills and Tools</h2>
          <div className="flex flex-wrap gap-4">
            {[ 
              "JavaScript", 
              "TypeScript", 
              "NodeJS", 
              "ReactJS", 
              "NextJS", 
              "AWS", 
              "GCP", 
              "Ionic", 
              "Docker", 
              "MongoDB", 
              "Postgres"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 border border-primary text-black rounded-full text-lg font-medium hover:bg-primary hover:text-white transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
  
        {/* Contact */}
        <div className="p-8 rounded-lg shadow-lg border-4 border-primary bg-gray-50">
          <form className="space-y-8">
            <h2 className="text-6xl font-bold text-primary text-center">
              Let's Work Together
            </h2>
  
            {/* Name Field */}
            <div className="form-control">
              <label htmlFor="name" className="label text-xl text-gray-800">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                id="name"
                className="input input-bordered w-full border-2 border-primary text-lg p-4"
                placeholder="Enter your name"
                required
              />
            </div>
  
            {/* Email Field */}
            <div className="form-control">
              <label htmlFor="email" className="label text-xl text-gray-800">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id="email"
                className="input input-bordered w-full border-2 border-primary text-lg p-4"
                placeholder="Enter your email"
                required
              />
            </div>
  
            {/* Message Field */}
            <div className="form-control">
              <label htmlFor="message" className="label text-xl text-gray-800">
                <span className="label-text">Message</span>
              </label>
              <textarea
                id="message"
                className="textarea textarea-bordered w-full border-2 border-primary text-lg p-4"
                placeholder="Write your message"
                rows={6}
                required
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <div className="form-control">
              <button
                type="submit"
                className="btn bg-primary text-white text-2xl font-bold w-full py-4 hover:bg-primary/80"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}
