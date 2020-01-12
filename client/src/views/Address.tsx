import React, { Component } from 'react'

type AddressProps = {}
type AddressState = {
  time: Date
}

export default class Address extends Component<AddressProps, AddressState> {
  constructor(props: AddressProps) {
    super(props)
  }
  render() {
    return (
      <div className="address-page">
        <p className="subtitle">등록된 배송지</p>
        <div className="card-list">
          <div className="card">
            <div className="card--left">
              <p className="id">[123456]</p>
              <div className="bandage">기본</div>
              <p className="address">서울시 강남구 강남대로 345, 12층 1201호</p>
            </div>
            <div className="card--right">
              <div className="tool">
                <i className="fas fa-ellipsis-h"></i>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card--left">
              <p className="id">[123456]</p>
              <div className="bandage">기본</div>
              <p className="address">서울시 강남구 강남대로 345, 12층 1201호</p>
            </div>
            <div className="card--right">
              <div className="tool">
                <i className="fas fa-ellipsis-h"></i>
              </div>
            </div>
          </div>
          <div className="card text-center">
            <p className="view-more">더보기</p>
          </div>
        </div>
        <div className="info-box">
          <p className="info-box--header">배송지를 삭제하면 예약된 후원의 배송지 정보도 삭제되나요?</p>
          <p className="info-box--body">
            현재 후원하신 프로젝트에 등록된 배송지가 삭제되거나 변경되지 않습니다. 이를 변경하시려면 후원현황에서
            변경해주세요. <a href="">내 후원현황 바로가기</a>
          </p>
        </div>
      </div>
    )
  }
}
