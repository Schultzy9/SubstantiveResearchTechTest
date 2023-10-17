import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ClientInteractions from '@/components/ClientInteractions.vue'

describe('ClientInteractions Test', () => {
	it('renders the component', () => {
		const wrapper = shallowMount(ClientInteractions)
		expect(wrapper.exists()).toBe(true)
	})

	it('displays loading message when isLoading is true', () => {
		const wrapper = shallowMount(ClientInteractions, {
			data() {
				return {
					isLoading: true,
					isLoaded: false,
					interactions: [],
					errorMessage: ''
				}
			},
		})

		const loadingMessage = wrapper.find('p')
		expect(loadingMessage.text()).toBe('LOADING...')
	})

	it('displays error message when errorMessage is not empty', () => {
		const errorMessage = 'An error occurred'
		const wrapper = shallowMount(ClientInteractions, {
			data() {
				return {
					isLoading: false,
					isLoaded: false,
					interactions: [],
					errorMessage: errorMessage
				}
			},
		})

		const errorParagraph = wrapper.find('p')
		expect(errorParagraph.text()).toBe(errorMessage)
	})

	it('toggles between chart types', async () => {
		const wrapper = shallowMount(ClientInteractions, {
			data() {
				return {
					isLoading: false,
					isLoaded: true,
					interactions: [],
					errorMessage: '',
					activeChart: 'column'
				}
			},
		})

		const buttons = wrapper.findAll('button')

		for (let i = 0; i < buttons.length; i++) {
			if (buttons[i].text() === 'Pie chart') {
				await buttons[i].trigger('click')
				break
			}
		}

		expect(wrapper.vm.activeChart).toBe('pie')
	})
})
