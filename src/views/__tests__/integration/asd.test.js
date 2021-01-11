import { mount } from '@vue/test-utils'
import App from '@/App.vue'

// App集成
describe('App.vue', () => {
  it('输入值按下回车，列表多一项', async (done) => {
    const wrapper = mount(App)
    const list = wrapper.vm.$data.list
    wrapper.vm.$nextTick(() => {
      expect(list.length).toBe(2)
      done()
    })

    const input = wrapper.find('[data-test="input"]')
    const val = 'haha'
    input.setValue(val)
    input.trigger('keyup.enter')
    expect(list).toContain(val)
    console.log(list)
    const cc = wrapper.find('.cc')
    await cc.trigger('click')
    expect(list.length).toBe(3)
  })

  it('点击每项的删除按钮，列表清空对应的数据', () => {
    const wrapper = mount(App, {
      data () {
        return {
          list: ['555', '666']
        }
      }
    })
    const input = wrapper.find('[data-test="input"]')
    const val = 'hahas'
    input.setValue(val)
    input.trigger('keyup.enter')
    expect(wrapper.vm.$data.list.length).toBe(3)
    const key1 = wrapper.findAll('.delete').at(1)
    key1.trigger('click')
    expect(wrapper.vm.$data.list.length).toBe(2)
    expect(wrapper.vm.$data.list).not.toContain('666')
  })
})
