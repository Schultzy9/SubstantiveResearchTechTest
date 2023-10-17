<script>
	import axios from 'axios'

	export default {
		name: 'ClientInteractions',
		data() {
			return {
				activeChart: 'column',
				errorMessage: '',
				interactions: [],
				isLoaded: false,
				isLoading: false,
			}
		},
		mounted() {
			this.isLoading = true
			axios.get("https://substantive.pythonanywhere.com/")
				.then((response) => {
					this.interactions = response.data.interactions
					this.isLoaded = true
				})
				.catch((error) => {
					this.errorMessage = error
				})
			this.isLoading = false
		},
		computed: {
			calculatePercentages() {
				const sectionInteractionCount = {}
				const totalInteractions = this.interactions.length

				for (let i = 0; i < totalInteractions; i++) {
					const interaction = this.interactions[i]
					const key = interaction.name
					if (sectionInteractionCount[key]) {
						sectionInteractionCount[key]++
					} else {
						sectionInteractionCount[key] = 1
					}
				}

				const sectors = Object.keys(sectionInteractionCount)
				const percentages = {}

				for (let i = 0; i < sectors.length; i++) {
					const client = sectors[i]
					percentages[client] = (sectionInteractionCount[client] / totalInteractions) * 100

				}

				return percentages
			},
		},
		methods: {
			toggleChart(chart) {
				this.activeChart = chart
			}
		}
	}
</script>

<template>
	<div>
		<div v-if="isLoading">
			<p>LOADING...</p>
		</div>

		<div v-if="isLoaded">
			<div id="charts-toggle">
				<button 
					@click="toggleChart('column')" 
					:class="{ 'active-button': activeChart === 'column' }" 
				>
					Column chart
				</button>
				
				<button 
					@click="toggleChart('pie')" 
					:class="{ 'active-button': activeChart === 'pie' }" 
				>
					Pie chart
				</button>

				<button 
					@click="toggleChart('bar')" 
					:class="{ 'active-button': activeChart === 'bar' }" 
				>
					Bar chart
				</button>
			</div>

			<div id="charts">
				<h2>Sector interaction percentage</h2>
				<column-chart v-show="activeChart === 'column'" :round="2" :data="calculatePercentages" />
				<pie-chart v-show="activeChart === 'pie'" :round="2" :donut="true" :data="calculatePercentages" />
				<bar-chart v-show="activeChart === 'bar'" :round="2" :data="calculatePercentages" />
			</div>
		</div>

		<div v-if="errorMessage">
			<p>{{ errorMessage }}</p>
		</div>
	</div>
</template>

<style lang="scss">
	button {
		background-color: #a23615;
		border: none;
		border-radius: 10px;
		color: white;
		padding: 16px 32px;
		text-align: center;
		font-size: 16px;
		margin: 4px 2px;
		opacity: 0.6;
		transition: 0.3s;
		display: inline-block;
		cursor: pointer;
		
		&:hover {
			opacity: 1;
		}
	}

	.active-button {
		opacity: 1;
	}

	#charts-toggle {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#charts {
		padding-top: 20px;
	}
</style>
