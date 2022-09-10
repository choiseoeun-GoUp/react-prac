import React from "react";

const prac = () => {
  const onChangeImg = async (e) => {
    e.preventDefault();

    if (e.target.files) {
      const uploadFile = e.target.files[0];
      const formData = new FormData();
      formData.append("files", uploadFile);

      await fetch({
        method: "post",
        url: "/api/files/images",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
  };
  return (
    <div>
      <form>
        <label htmlFor="profile-upload" />
        <input
          type="file"
          id="profile-upload"
          accept="image/*"
          onChange={onChangeImg}
        />
      </form>
    </div>
  );
};

export default prac;
