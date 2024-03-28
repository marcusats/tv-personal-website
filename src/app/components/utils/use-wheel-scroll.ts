import { RefObject } from "react";
import { useDomEvent, MotionValue, animate } from "framer-motion";
import { debounce } from "lodash";
import { spring } from "popmotion";
import { mix } from "@popmotion/popcorn";


interface Constraints {
  top: number;
  bottom: number;
}

const deltaThreshold = 5;
const elasticFactor = 0.2;

function springTo(value: MotionValue, from: number, to: number) {
  if (value.isAnimating()) return;

  const controls = animate(from, to, {
    type: "spring",
    velocity: value.getVelocity(),
    stiffness: 400,
    damping: 40,
    onUpdate: (v: number) => value.set(v),
  });

  return () => {
    controls.stop();
  };
}

const debouncedSpringTo = debounce(springTo, 100);

/**
 * Re-implements wheel scroll for overflow: hidden elements.
 * Adds constraints and "snap back" animations similar to Apple Watch crown-style.
 */
export function useWheelScroll(
  ref: RefObject<Element>,
  y: MotionValue<number>,
  constraints?: Constraints | null,
  onWheelCallback?: (e: WheelEvent) => void,
  isActive?: boolean
) {
  const onWheel = (event: Event) => {
    event.preventDefault();

    const wheelEvent = event as WheelEvent; // Type assertion here

    const currentY = y.get();
    let newY = currentY - wheelEvent.deltaY;
    let startedAnimation = false;

    const isWithinBounds =
      constraints && newY >= constraints.top && newY <= constraints.bottom;

    if (constraints && !isWithinBounds) {
      newY = mix(currentY, newY, elasticFactor);

      if (newY < constraints.top) {
        if (wheelEvent.deltaY <= deltaThreshold) {
          springTo(y, newY, constraints.top);
          startedAnimation = true;
        } else {
          debouncedSpringTo(y, newY, constraints.top);
        }
      }

      if (newY > constraints.bottom) {
        if (wheelEvent.deltaY >= -deltaThreshold) {
          springTo(y, newY, constraints.bottom);
          startedAnimation = true;
        } else {
          debouncedSpringTo(y, newY, constraints.bottom);
        }
      }
    }

    if (!startedAnimation) {
      y.stop();
      y.set(newY);
    } else {
      debouncedSpringTo.cancel();
    }

    if (onWheelCallback) {
      onWheelCallback(wheelEvent);
    }
  };

  // Type assertion to EventListener
  useDomEvent(ref, "wheel", isActive ? (onWheel as EventListener) : undefined, { passive: false });
}
