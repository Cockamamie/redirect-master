function openPage() {
  chrome.tabs.create({url: chrome.runtime.getURL("app.html")});
}

const Popup = () => {
  return (
    <>
      <div>Hi</div>
      <button onClick={openPage} />
    </>
  );
};

export default Popup;
