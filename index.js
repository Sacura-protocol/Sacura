async function sayHello() {
	let [tab] = await chrome.tabs.query({ active: true })
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		func: () => {
			alert('Hi my friend')
		},
	})
}
document.getElementById('buttonPointer').addEventListener('click', sayHello)
