import { mount } from '@vue/test-utils'
import WellMap from '@/components/WellMap.vue'
import flushPromises from 'flush-promises'


describe('WellMap.vue', () => {  let wrapper


  beforeEach(() => {
    wrapper = mount(WellMap)
  })

  it('renders the map along with the well trajectory', () => {
    console.log(wrapper.html())
  })
})
