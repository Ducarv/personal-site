export function ProfileCard() {
  return (
    <div className="card bg-primary w-full lg:w-96 h-auto mt-14 lg:h-auto shadow-xl lg:fixed">
      <figure className="px-10 pt-10">
        <img
          src="https://github.com/ducarv.png"
          alt="Eduardo Carvalho"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center pt-6">
        <h2 className="card-title text-white">Eduardo Carvalho</h2>
        <p className="text-white">A Software Engineer who has developed countless innovative solutions.</p>
        <div className="card-actions"></div>
      </div>
    </div>
  );
}
