import { mount } from '@vue/test-utils'
import App from '@/app'

// describe('Header.vue', () => {
//   it('测试input初始化时数据值为空', () => {
//     const wrapper = shallowMount(Header)
//     const input = wrapper.find('[data-test="input"]')
//     expect(input.text()).toEqual('')
//   })

//   it('当用户输入后, 按下回车触发add事件', async () => {
//     const wrapper = shallowMount(Header)
//     const input = wrapper.find('[data-test="input"]')
//     input.setValue('hahaha')
//     expect(wrapper.vm.$data.keyWord).toEqual('hahaha')
//   })
// })

// App集成
describe('App.vue', () => {
  it('输入值按下回车，列表多一项', () => {
    const wrapper = mount(App)
    const input = wrapper.find('[data-test="input"]')
    const val = 'haha'
    input.setValue(val)
    input.trigger('keyup.enter')
    const list = wrapper.vm.$data.list
    expect(list).toContain(val)
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
