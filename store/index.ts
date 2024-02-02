export const state = () => ({
	mouseX: 0,
	mouseY: 0
})

export const mutations = {
	setMouseCoordinates(state, { x, y }) {
		state.mouseX = x
		state.mouseY = y
	}
}
