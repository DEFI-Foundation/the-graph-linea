import {
  ClosedSwap as ClosedSwapEvent,
  CreatedSwap as CreatedSwapEvent,
  ExecutedSwap as ExecutedSwapEvent,
  LiquidatedSwap as LiquidatedSwapEvent
} from "../generated/wbtc_usdc/swap_wbtc_usdc"
import {

  ClosedSwap,
  CreatedSwap,
  ExecutedSwap,
  LiquidatedSwap
} from "../generated/schema"



export function handleClosedSwap(event: ClosedSwapEvent): void {
  let entity = new ClosedSwap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.contractAddress = event.address;
  entity.swap_id = event.params.id
  entity.creator = event.params.creator
  entity.profit = event.params.profit
  entity.remainingCover = event.params.remainingCover
  entity.closingTime = event.params.closingTime
  entity.expirePrice = event.params.expirePrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreatedSwap(event: CreatedSwapEvent): void {
  let entity = new CreatedSwap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.contractAddress = event.address;
  entity.swap_id = event.params.id
  entity.creator = event.params.creator
  entity.swapType = event.params.swapType
  entity.threshold = event.params.threshold
  entity.executionTime = event.params.executionTime
  entity.creationBlock = event.params.creationBlock

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}


export function handleExecutedSwap(event: ExecutedSwapEvent): void {
  let entity = new ExecutedSwap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.contractAddress = event.address;
  entity.swap_id = event.params.id
  entity.creator = event.params.creator
  entity.liquidator = event.params.liquidator
  entity.profit = event.params.profit
  entity.remainingCover = event.params.remainingCover
  entity.expirePrice = event.params.expirePrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}


export function handleLiquidatedSwap(event: LiquidatedSwapEvent): void {
  let entity = new LiquidatedSwap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.contractAddress = event.address;
  entity.swap_id = event.params.id
  entity.creator = event.params.creator
  entity.liquidator = event.params.liquidator
  entity.liquidationTime = event.params.liquidationTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}