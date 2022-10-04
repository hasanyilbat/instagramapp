import React from "react";

const Header = ({ user }) => {
  console.log(user);
  return (
    <header className="flex items-center gap-x-24 px-24 py-4 pb-10">
      <img
        src="/no-avatar.jpeg"
        alt=""
        className="w-[150px] h-[150px] rounded full"
      />
      <div>
        <div className="mb-6">
          <h1 className="text-[28px] font-semibold font-light-300">
            {user.username}
          </h1>
        </div>

        <nav className="flex gap-x-10 items center">
          <div>
            {" "}
            <span className="font-semibold">{user.posts}</span> posts
          </div>
          <div>
            <span className="font-semibold">{user.followers.length}</span>{" "}
            followers
          </div>
          <div>
            {" "}
            <span className="font-semibold">{user.following.length}</span>{" "}
            following
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
