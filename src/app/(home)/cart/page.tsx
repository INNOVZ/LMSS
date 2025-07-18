import React from "react";
import Link from "next/link";
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";

const Cart = () => {
//   const { cartItems, removeFromCart, getTotalPrice } = useCart();
//   const { user } = useAuth();

  const handleCheckout = () => {
    // Mock checkout process
    alert(
      "Checkout functionality would be implemented here with payment integration"
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="max-w-md mx-auto">
              <ShoppingCart className="h-24 w-24 text-gray-400 mx-auto mb-8" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Your cart is empty
              </h1>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any courses to your cart yet. Start
                exploring and find your perfect course!
              </p>
              <Button size="lg" asChild>
                <Link href="/courses">
                  Browse Courses
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600">
            {cartItems.length} course{cartItems.length > 1 ? "s" : ""} in your
            cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-24 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <Link href={`/course/${course.id}`} className="block">
                        <h3 className="font-semibold text-lg mb-1 hover:text-purple-600 transition-colors">
                          {course.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-gray-600 mb-2">
                        By {course.instructor}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{course.level}</span>
                        <span>{course.duration}</span>
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl font-bold text-gray-900">
                          ${course.price}
                        </span>
                        {course.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${course.originalPrice}
                          </span>
                        )}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeFromCart(course.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discount:</span>
                    <span className="text-green-600">-$0.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {user ? (
                    <Button
                      className="w-full"
                      size="lg"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </Button>
                  ) : (
                    <Button className="w-full" size="lg" asChild>
                      <Link to="/login">Login to Purchase</Link>
                    </Button>
                  )}
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/courses">Continue Shopping</Link>
                  </Button>
                </div>

                <div className="text-xs text-gray-500 space-y-1">
                  <p>• 30-day money-back guarantee</p>
                  <p>• Lifetime access to courses</p>
                  <p>• Learn at your own pace</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
