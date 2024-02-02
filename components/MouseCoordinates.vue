<template>
	<div>
		<h1>Mouse Coordinates</h1>
		<p>Mouse X: {{ mouseX }}</p>
		<p>Mouse Y: {{ mouseY }}</p>
	</div>
</template>

<script>
export default {
	computed: {
		mouseX() {
			return this.$store.state.mouseX
		},
		mouseY() {
			return this.$store.state.mouseY
		}
	},
	mounted() {
		window.addEventListener('mousemove', this.handleMouseMove)
		this.setupBroadcastChannel()
	},
	beforeDestroy() {
		window.removeEventListener('mousemove', this.handleMouseMove)
	},
	methods: {
		handleMouseMove(event) {
			const { clientX, clientY } = event

			this.$store.commit('setMouseCoordinates', { x: clientX, y: clientY })

			this.broadcastChannel.postMessage({ x: clientX, y: clientY })
		},
		setupBroadcastChannel() {
			this.broadcastChannel = new BroadcastChannel('mouseCoordinates')

			this.broadcastChannel.onmessage = (event) => {
				this.$store.commit('setMouseCoordinates', { x: event.data.x, y: event.data.y })
			}
		}
	}
}
</script>
